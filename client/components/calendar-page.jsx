import React from 'react';
import dateFns from 'date-fns';
import NavBar from './nav-bar';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      favoritedList: undefined
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.onDateClick = this.onDateClick.bind(this);
    this.renderDots = this.renderDots.bind(this);
    this.getFavoritedList = this.getFavoritedList.bind(this);
  }



  renderHeader() {
    const dateFormat = 'MMMM YYYY';

    return (
      <div className="header row flex-middle rowStyle">
        <div className="col col-start colStyle">
          <div className = "icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center colStyle">
          <span>
            {dateFns.format(this.state.currentMonth, dateFormat)}
          </span>
        </div>
        <div className="col col-end colStyle" onClick={this.nextMonth}>
          <div className="icon">
            chevron_right
          </div>
        </div>
      </div>
    );
  }

  renderDays() {
    const daysOfWeek = ['SUN', 'MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT'];
    const days = [];

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center col-style" key={i}>
          {daysOfWeek[i]}
        </div>
      );
    }
    return <div className="days row rowStyle">{days}</div>;
  }

  getFavoritedList(){
    fetch(/**/)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          favoritedList: myJson
        });
      });
  }

  renderDots(calendarDay){
    // this.getFavoritedList();
    const dummyData = [
      {
        "id": "3",
        "day": "MONDAY",
        "city": "LAGUNA HILLS",
        "time": "7:30 AM",
        "type": "(O)",
        "name": "SOBRIETY - 12 X 12 STEP STUDY",
        "address": "23802 Avenida de la Carlota @ Valencia (St. George's Church)",
        "zip": "92653",
        "program": "AA",
        "favorite": "1"
      },
      {
        "id": "4",
        "day": "MONDAY",
        "city": "LAGUNA HILLS",
        "time": "6:00 PM",
        "type": "(C,W)",
        "name": "WOMEN'S DISCUSSION",
        "address": "23802 Avenida de la Carlota @ Valencia (St. George's Church)",
        "zip": "92653",
        "program": "AA",
        "favorite": "1"
      },
      {
        "id": "5",
        "day": "MONDAY",
        "city": "LAGUNA HILLS",
        "time": "7:30 PM",
        "type": "(O)",
        "name": "FISH BOWL OPEN DISCUSSION",
        "address": "23541-B Calle de la Louisa (Upstairs inside gym, same bldg. as Nordstrom Rack)",
        "zip": "92653",
        "program": "AA",
        "favorite": "1"
      },
      {
        "id": "1",
        "day": "SUNDAY",
        "city": "LAGUNA HILLS",
        "time": "5:00 PM",
        "type": "(O,TA)",
        "name": "11TH STEP MEDITATION MEETING",
        "address": "23802 Avenida de la Carlota @ Valencia (St. George's Church-Sanctuary)",
        "zip": "92653",
        "program": "AA",
        "favorite": "1"
      },
      {
        "id": "1",
        "day": "FRIDAY",
        "city": "LAGUNA HILLS",
        "time": "5:00 PM",
        "type": "(O,TA)",
        "name": "11TH STEP MEDITATION MEETING",
        "address": "23802 Avenida de la Carlota @ Valencia (St. George's Church-Sanctuary)",
        "zip": "92653",
        "program": "AA",
        "favorite": "1"
      }
    ];
    
    const newDummyData = {
        "0": undefined,
        "1": undefined,
        "2": undefined,
        "3": undefined,
        "4": undefined,
        "5": undefined,
        "6": undefined
    };
    
    dummyData.map(favorites => {
      if(favorites.day === "SUNDAY"){
        return(newDummyData["0"] = [favorites])
      }
      if(favorites.day === "MONDAY"){
        return(newDummyData["1"] = [favorites])
      }
      if(favorites.day === "TUESDAY"){
        return(newDummyData["2"] = [favorites])
      }
      if(favorites.day === "WEDNESDAY"){
        return(newDummyData["3"] = [favorites])
      }
      if(favorites.day === "THRUSDAY"){
        return(newDummyData["4"] = [favorites])
      }
      if(favorites.day === "FRIDAY"){
        return(newDummyData["5"] = [favorites])
      }
      if(favorites.day === "SATURDAY"){
        return(newDummyData["6"] = [favorites])
      }
    })
    

    if(calendarDay === 0 && newDummyData["0"]){
      return(<i className="fas fa-circle calendarDots"></i>)
    }
    if(calendarDay === 1 && newDummyData["1"]){
      return(<i className="fas fa-circle calendarDots"></i>)
    }
    if(calendarDay === 2 && newDummyData["2"]){
      return(<i className="fas fa-circle calendarDots"></i>)
    }
    if(calendarDay === 3 && newDummyData["3"]){
      return(<i className="fas fa-circle calendarDots"></i>)
    }
    if(calendarDay === 4 && newDummyData["4"]){
      return(<i className="fas fa-circle calendarDots"></i>)
    }
    if(calendarDay === 5 && newDummyData["5"]){
      return(<i className="fas fa-circle calendarDots"></i>)
    }
    if(calendarDay === 6 && newDummyData["6"]){
      return(<i className="fas fa-circle calendarDots"></i>)
    }
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    const dateFormat = 'D';
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) { //when i = 0-7 check if my favoritesList obj has corresponding number keys
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div className={`col colStyle cell ${!dateFns.isSameMonth(day, monthStart)
            ? 'disabled'
            : dateFns.isSameDay(day, selectedDate) ? 'selected' : ''
          }`}
          key={day}
          onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span>{this.renderDots(i)}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row rowStyle" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick(day) {
    this.setState({
      selectedDate: day
    });
  }

  nextMonth() {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  }

  prevMonth() {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  }

  render() {
    return (

      <React.Fragment>
        <NavBar />
        <div className="calendar calendarStyle mt-3">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
        </div>
      </React.Fragment>
    );
  }
}
