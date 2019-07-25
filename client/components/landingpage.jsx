import React from 'react';
import { Form, FormGroup, Input, Button, Container, Row, Col } from 'reactstrap';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchZone: undefined
    };
  }

  handleSearchZoneChange(event) {
    this.setState({ searchZone: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      searchZone: undefined
    });

  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={{ size: 12, offset: 1 }}>
            <img src="./images/cleanStrideLogo.png" alt="App Logo"/>
          </Col>
        </Row>
        <Row className="landingForm ml-3">
          <Col xs={{ size: 9, offset: 1 }}>
            <Form onSubmit={this.handleSubmit} action="">
              <FormGroup>
                <Input required placeholder="City or Zipcode" bsSize="lg" value={this.state.searchZone} onChange={this.handleSearchZoneChange} />
                <Row className="mt-2">
                  <Col xs={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="primary">Search Recovery</Button>{' '}
                  </Col>
                </Row>
                <Row className="mt-1 mr-2">
                  <Col xs={{ size: 10, offset: 2 }}>
                    <Button color="secondary">Meeting Directory</Button>{' '}
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
