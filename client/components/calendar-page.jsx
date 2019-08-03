import React from 'react';
import dateFns from 'date-fns';
import NavBar from './nav-bar';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      calendarList: undefined,
      sortedMeetings: null
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.onDateClick = this.onDateClick.bind(this);
    this.getCalendarList = this.getCalendarList.bind(this);
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
        <div className="col col-center col-style colStyle" key={i}>
          {daysOfWeek[i]}
        </div>
      );
    }
    return <div className="days row rowStyle">{days}</div>;
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
      for (let i = 0; i < 7; i++) {
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

  getCalendarList() {
    fetch('/api/calendar.php')
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          calendarList: myJson,
          sortedMeetings: this.sortMeetings(myJson)
        });
      });
  }

  sortMeetings(array) {
    let sortedMeetings = {
      '0': [],
      '1': [],
      '2': [],
      '3': [],
      '4': [],
      '5': [],
      '6': []
    };
    for (let i = 0; i < array.length; i++) {
      switch (array[i].day) {
        case 'SUNDAY':
          sortedMeetings[0].push(array[i]);
          break;
        case 'MONDAY':
          sortedMeetings[1].push(array[i]);
          break;
        case 'TUESDAY':
          sortedMeetings[2].push(array[i]);
          break;
        case 'WEDNESDAY':
          sortedMeetings[3].push(array[i]);
          break;
        case 'THURSDAY':
          sortedMeetings[4].push(array[i]);
          break;
        case 'FRIDAY':
          sortedMeetings[5].push(array[i]);
          break;
        case 'SATURDAY':
          sortedMeetings[6].push(array[i]);
          break;
        default:
          break;
      }
    }
    return sortedMeetings;
  }

  renderDots(i) {
    let numberOfIcons = this.state.sortedMeetings[i].map((meeting, input) => <p key={meeting.id} className={`calendarInfo position${input} ${meeting.program} font-weight-bold`}>{meeting.program}<br/>{meeting.time}</p>);
    return numberOfIcons;
  }

  componentDidMount() {
    this.getCalendarList();
  }

  render() {
    if (this.state.calendarList !== undefined) {
      return (
        <React.Fragment>
          <NavBar />
          <div className="calendar mt-3">
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells()}
          </div>
        </React.Fragment>
      );
    } else {
      return <div>loading...</div>;
    }
  }
}
