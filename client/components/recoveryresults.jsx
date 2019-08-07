import React from 'react';
import RecoveryResultsCard from './recovery-results-item';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBar from './nav-bar';

class RecoveryResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googleResult: null,
      searchZone: '',
      latitude: undefined,
      longitude: undefined
    };
    this.renderRecoveryCard = this.renderRecoveryCard.bind(this);
    this.handleDescendingRating = this.handleDescendingRating.bind(this);
    this.handleAscendingRating = this.handleAscendingRating.bind(this);
    this.getGooglePlacesListFromCoords = this.getGooglePlacesListFromCoords.bind(this);

  }

  getGooglePlacesList(userInput) {
    // let targetURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyCC4k-zZUEeozf7452tXNKmHntB33napHg&inputtype=textquery&input=recovery centers in ${userInput}&fields=formatted_address,url,website,geometry,icon,name,photos,opening_hours,price_level,place_id,plus_code,types&circle=50000`;
    fetch(`/api/googletextsearch_proxy.php?key=AIzaSyCC4k-zZUEeozf7452tXNKmHntB33napHg&inputtype=textquery&input=recovery centers in ${userInput}&fields=formatted_address,url,website,geometry,icon,name,photos,opening_hours,price_level,place_id,plus_code,types&circle=50000`)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          googleResult: myJson.results
        });
      });
  }

  getGooglePlacesListFromCoords(coords) {
    fetch(`/api/googlenearbysearch_proxy.php?key=AIzaSyCC4k-zZUEeozf7452tXNKmHntB33napHg&radius=50000&location=${coords}&type=rehab, recovery, addiction&keyword=rehab, recovery, addiction`)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          googleResult: myJson.results
        });
      });
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    if (params.id.length < 20) {
      this.getGooglePlacesList(params.id);
    } else {
      this.getGooglePlacesListFromCoords(params.id);
    }
  }
  handleDescendingRating() {
    let currentList = this.state.googleResult;
    this.setState({
      googleResult: currentList.sort((a, b) => a.rating - b.rating)
    });
  }
  handleAscendingRating() {
    let currentList = this.state.googleResult;
    let AscendingSortedList = currentList.sort((a, b) => a.rating - b.rating);
    if (currentList || AscendingSortedList) {
      this.setState({
        googleResult: AscendingSortedList.sort((a, b) => b.rating - a.rating)
      });
    }
  }

  renderRecoveryCard() {
    if (this.state.googleResult) {
      return this.state.googleResult.map(input => {
        return (
          <Link to={'/detailspage/' + input.name} key={input.id}>
            <RecoveryResultsCard input={input}/>
          </Link>
        );
      });
    }
  }

  render() {
    if (this.state.googleResult || this.state.latitude) {
      return (
        <div>
          <NavBar />
          <Container>
            <button onClick={this.handleDescendingRating}>Sort</button>
            <Button outline color="secondary" onClick = {this.handleAscendingRating}>Descending</Button>{' '}
            {this.renderRecoveryCard()}
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <div className="flexCentering loaderContainer">
            <div className="loader"></div>
          </div>
          <div className="flexCentering loaderText">Loading Results...</div>
        </div>
      );
    }
  }
}
export default RecoveryResults;
