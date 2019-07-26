import React from 'react';
import { Container, Card, CardBody } from 'reactstrap';

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
      <Container>
        <Card className="mt-5">
          <CardBody className="header">
            <h1></h1>
            <p>Name: </p>
            <p>Rating: </p>
          </CardBody>
        </Card>
        <Card className="mt-3">
          <CardBody className="contactInfo">
            <h1>Contact Information</h1>
            <p>Name: </p>
            <p>Address: </p>
            <p>Phone: </p>
          </CardBody>
        </Card>
        <Card className="mt-3">
          <CardBody className="description">
            <h1>Description</h1>
            <p>{this.state.centers.items[0].pagemap.website[0].description}</p>
          </CardBody>
        </Card>
      </Container>
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
