import React from 'react';

class RecoveryResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googleResult: [],
      searchZone: ""
    };

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
          googleResult: myJson
        });
      });
      console.log("RR page get list state: ", this.state);
  }

  componentDidMount() {
    this.getGooglePlacesList(this.props.params.searchZone);
  }

  render() {
    console.log("recovery page this.state: ", this.state)
    return (
      <div>
        <div>
          {this.state.googleResults}results
        </div>
      </div>
    );
  }
}
export default RecoveryResults;
