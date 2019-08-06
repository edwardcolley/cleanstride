import React from 'react';
import { Form, FormGroup, Button, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBar from './nav-bar';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchZone: '',
      latitude: undefined,
      longitude: undefined
    };

    this.handleSearchZoneChange = this.handleSearchZoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUserLocation = this.getUserLocation.bind(this);
    this.useCoords = this.useCoords.bind(this);
  }

  handleSearchZoneChange(event) {
    this.setState({ searchZone: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.goToResultsPage();
    this.setState({
      searchZone: ''
    });
  }

  componentDidMount(){
    this.getUserLocation();
  }

  getUserLocation() {
    navigator.geolocation.getCurrentPosition(this.useCoords);
  }

  useCoords(position){
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container className="landingPage">
          <Row className="ml-2">
            <Col xs={{ size: 6 }} sm={{ size: 4 }} lg={{ size: 6, offset: 4 }}>
              <img src="./images/transparentLogo.png" height="300" alt="App Logo"/>
            </Col>
            <Col className="landingForm" xs={{ size: 10, offset: 1 }} sm={{ size: 6, offset: 1 }} lg={{ size: 6, offset: 3 }}>
              <Form onSubmit={this.handleSubmit} action="">
                <FormGroup>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control shadow" max="20" placeholder="City or Zipcode" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.searchZone} onChange={this.handleSearchZoneChange}/>
                    <div className="input-group-append">
                      <Link to={'/recoveryresults/' + this.state.searchZone}>
                        <button className="btn btn-pirmary btn-outline-primary shadow" color="primary" type="button">Search</button>
                      </Link>
                    </div>
                  </div>
                  <Row className="mt-1">
                    <Col xs={{ size: 10, offset: 2 }} md={{ size: 10, offset: 3 }} lg={{ size: 10, offset: 4 }}>
                      <Link to={"/recoveryresults/" + this.state.latitude + "," + this.state.longitude} latitude={this.state.latitude} longitude={this.state.longitude}>
                        <Button className="shadow" type="submit" color="primary">Use My Location</Button>{' '}
                      </Link>
                    </Col>
                  </Row>
                  <Row className="mt-1 mr-2">
                    <Col xs={{ size: 10, offset: 2 }} md={{ size: 10, offset: 3 }} lg={{ size: 10, offset: 4 }}>
                      <Link to="/meetings">
                        <Button className="shadow" color="secondary">Meeting Directory</Button>{' '}
                      </Link>
                    </Col>
                  </Row>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
