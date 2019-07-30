import React from 'react';

export default class LoadingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      latitude: undefined,
      longitude: undefined
    };

    this.showPosition = this.showPosition.bind(this);
  }

  componentDidMount() {
    this.getUserLocation();
  }

  GoToReusltsPage() {
    this.props.setView('recoveryresults', { latitude: this.state.latitude, longitude: this.state.longitude });
  }

  getUserLocation() {
    navigator.geolocation.getCurrentPosition(this.showPosition);
  }

  showPosition(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }

  componentDidUpdate() {
    this.GoToReusltsPage();
  }

  render() {
    return (
      <div className="loaderContainer">
        <div className="loader"></div>
      </div>
    );
  }
}
