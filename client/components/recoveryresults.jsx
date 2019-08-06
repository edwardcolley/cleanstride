import React from 'react';
import RecoveryResultsCard from './recovery-results-item';
import Button, { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBar from './nav-bar';

class RecoveryResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googleResult: null,
      searchZone: ''
    };
    this.renderRecoveryCard = this.renderRecoveryCard.bind(this);
    this.handleDescendingRating = this.handleDescendingRating.bind(this);
  }

  getGooglePlacesList(userInput) {
    let proxyURL = 'https://cors-anywhere.herokuapp.com/';
    let targetURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyCC4k-zZUEeozf7452tXNKmHntB33napHg&inputtype=textquery&input=recovery centers in ${userInput}&fields=formatted_address,url,website,geometry,icon,name,photos,opening_hours,price_level,place_id,plus_code,types&circle=50000@40.0150,105.2705`;
    fetch(proxyURL + targetURL)
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
    this.getGooglePlacesList(params.id);
  }
  handleDescendingRating() {
    let descendingStarRatings = this.state.googleResult;
    console.log(descendingStarRatings);
    descendingStarRatings.sort(function (a, b) {
      return a.rating - b.rating;
    })
      .then(descendingResult => {
        console.log(descendingResult);
        this.setState({
          googleResult: descendingResult.ratings
        });
      });
  }

  renderRecoveryCard() {
    return this.state.googleResult.map(input => {
      return (
        <Link to={'/detailspage/' + input.name} key={input.id}>
          <RecoveryResultsCard input={input}/>
        </Link>
      );
    });
  }

  render() {
    if (this.state.googleResult) {
      return (
        <div>
          <NavBar />
          <Container>
            <button>Sort</button>
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
