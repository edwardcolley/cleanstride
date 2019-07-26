import React from 'react';

class ListNearbyRC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googleResult: []
    };

  }

  getGooglePlacesList() {
    let proxyURL = 'https://cors-anywhere.herokuapp.com/';
    let targetURL = `https://maps.googleapis.com/maps/api/place/details/json?input=RecoveryCenter&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyAL2VJsnnG2OJSXAij5C8TBFuFr2GlUtvc&place_id=ChIJxQP9k2To3IARwLuGiUiEROI`;
    fetch(proxyURL + targetURL)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          googleResult: myJson
        });
        console.log('Setting State', this.state.googleResult);

      });
  }
  componentDidMount() {
    this.getGooglePlacesList();
  }

  render() {
    return (
      <div>
        <div>
          {this.state.googleResults}
        </div>
      </div>
    );
  }
}
export default ListNearbyRC;
