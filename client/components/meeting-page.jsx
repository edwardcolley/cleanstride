import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import Meetingcard from './meeting-card';

export default class Meetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      program: null,
      day: null,
      city: null,
      meetings: {

      },
      search: false
    };
    this.getMeetings = this.getMeetings.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeProgram = this.handleChangeProgram.bind(this);
    this.renderMeetingcards = this.renderMeetingcards.bind(this);
  }

  getMeetings() {
    fetch('/api/meetings.php?day=' + this.state.day + '&city=' + this.state.city)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          meetings: myJson,
          search: true
        });
      });
  }

  handleChangeDay(event) {
    this.setState({
      day: event.target.value
    });
  }

  handleChangeCity(event) {
    this.setState({
      city: event.target.value
    });
  }

  handleChangeProgram(event) {
    this.setState({
      program: event.target.value
    });
  }

  renderMeetingcards() {
    return this.state.meetings.map(input => {
      return (
        <Meetingcard key={input.id} input={input}/>
      );
    });
  }

  render() {
    return (
      <Container xs={{ fluid: true }}>
        <Row className="mt-4">
          <Col xs={{ size: 10, offset: 1 }}>
            <Form>
              <FormGroup>
                <Input type="select" name="" id="exampleSelect" onChange={this.handleChangeProgram}>
                  <option>PROGRAM</option>
                  <option>AA</option>
                  <option>Al-Anon</option>
                  <option>NA</option>
                  <option>OA</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="select" name="" id="exampleSelect" onChange={this.handleChangeCity}>
                  <option>CITY</option>
                  <option>LAGUNA HILLS</option>
                  <option>NEWPORT BEACH</option>
                  <option>LAKE FOREST</option>
                  <option>RANCHO SANTA MARGARITA</option>
                  <option>IRVINE</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="select" name="" id="exampleSelect" onChange={this.handleChangeDay}>
                  <option>DAY</option>
                  <option>SUNDAY</option>
                  <option>MONDAY</option>
                  <option>TUESDAY</option>
                  <option>WEDNESDAY</option>
                  <option>THURSDAY</option>
                  <option>FRIDAY</option>
                  <option>SATURDAY</option>
                </Input>
              </FormGroup>
              <Row>
                <Col xs={{ size: 4, offset: 4 }}>
                  <Button onClick={this.getMeetings} color="info" size="sm">Search</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        {this.state.search === true &&
          this.renderMeetingcards()
        }
      </Container>
    );
  }
}
