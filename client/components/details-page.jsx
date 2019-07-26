import React from 'react';

class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centers: null
    };
  }

  render() {
    if (this.state.centers === null) {
      return null;
    }
    return (
      <div>
        <p className="recovery-details">{this.state.centers.items[0].pagemap.website[0].description}</p>
      </div>
    );
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyCDfSs7m4X6jeepCTsFxLrhu6MXrDQtBG4&cx=017903074074624854424:2a98z0iuzye&q=recoverycenters')
      .then(res => res.json())
      .then(result => {
        this.setState({ centers: result });
      });
  }
}

export default DetailsPage;
