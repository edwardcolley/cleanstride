import React from 'react';
import { Form, FormGroup, Input, Button, Container, Row, Col } from 'reactstrap';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchZone: ""
    };

    this.handleSearchZoneChange = this.handleSearchZoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToResultsPage = this.goToResultsPage.bind(this);

  }

  handleSearchZoneChange(event) {
    this.setState({ searchZone: event.target.value });
  }

  goToResultsPage(){
    this.props.setView("recoveryresults", {searchZone: this.state.searchZone});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.goToResultsPage();
    this.setState({
      searchZone: ""
    });
  }
  

  render() {
    return (
      <Container className="landingPage">
        <Row className="ml-1">
          <Col xs={{ size: 12, offset: 1 }}>
            <img src="./images/cleanStrideLogo.png" alt="App Logo"/>
          </Col>
        </Row>
        <Row className="landingForm ml-3">
          <Col xs={{ size: 9, offset: 1 }}>
            <Form onSubmit={this.handleSubmit} action="">
              <FormGroup>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="City or Zipcode" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.searchZone} onChange={this.handleSearchZoneChange}/>
                    <div className="input-group-append">
                      <button className="btn btn-pirmary btn-outline-primary" color="primary" type="button" onClick={this.handleSubmit}>Search</button>
                    </div>
                </div>
                <Row className="mt-2">
                  <Col xs={{ size: 10, offset: 2 }}>
                    <Button onClick={() => this.props.setView('loading', {})} type="submit" color="primary">Use My Location</Button>{' '}
                  </Col>
                </Row>
                <Row className="mt-1 mr-2">
                  <Col xs={{ size: 10, offset: 2 }}>
                    <Button onClick={() => this.props.setView('meetings', {})} color="secondary">Meeting Directory</Button>{' '}
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
