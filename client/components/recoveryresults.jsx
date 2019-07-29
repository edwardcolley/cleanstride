import React from 'react';
import RecoveryResultsCard from './recovery-results-item';
import { Container } from 'reactstrap';

class RecoveryResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googleResult: null,
      searchZone: ''
    };
    this.renderRecoveryCard = this.renderRecoveryCard.bind(this);
  }

  getGooglePlacesList(userInput) {
    let proxyURL = 'https://cors-anywhere.herokuapp.com/';
    let targetURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyCC4k-zZUEeozf7452tXNKmHntB33napHg&inputtype=textquery&input=rehab centers in ${userInput}&fields=formatted_address,url,website,geometry,icon,name,photos,opening_hours,price_level,place_id,plus_code,types&circle=50000@40.0150,105.2705`;
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
    this.getGooglePlacesList(this.props.params.searchZone);
  }

  renderRecoveryCard() {
    console.log(this.state.googleResult);
    return this.state.googleResult.map(input => {
      return (
        <RecoveryResultsCard key={input.id} input={input}/>
      );
    });
  }

  render() {
    if (this.state.googleResult) {

      return (
        <Container>
          {this.renderRecoveryCard()}
        </Container>
      );
    } else {
      return (
        <p>loading...</p>
      );
    }
  }
}
export default RecoveryResults;
