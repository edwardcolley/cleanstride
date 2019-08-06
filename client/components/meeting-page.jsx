/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button, Card, CardText, InputGroup, CardTitle } from 'reactstrap';
import Meetingcard from './meeting-card';
import NavBar from './nav-bar';
import { Link } from 'react-router-dom';

export default class Meetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      program: null,
      day: null,
      city: 'CITY',
      meetings: {

      },
      favorites: {
      },
      search: false
    };
    this.getMeetings = this.getMeetings.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeProgram = this.handleChangeProgram.bind(this);
    this.renderMeetingcards = this.renderMeetingcards.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
    // this.getFavoriteMeetings();
  }

  getMeetings() {
    fetch('/api/meetings.php?day=' + this.state.day + '&program=' + this.state.program + '&city=' + this.state.city)
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

  addFavorite(newMeeting) {
    fetch('/api/favorites.php', {
      method: 'POST',
      body: JSON.stringify(newMeeting),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  deleteFavorite(meetingId) {
    fetch('/api/favorites.php', {
      method: 'DELETE',
      body: JSON.stringify(meetingId),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        response.json();
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
        <Meetingcard key={input.id} input={input} deleteFavorite={this.deleteFavorite} addFavorite={this.addFavorite}/>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container className="meetingContainer" xs={{ fluid: true }}>
          <Row className="mt-4">
            <Col xs={{ size: 10, offset: 1 }}>
              <h3 className="text-center text-secondary"><span><i className="far fa-handshake"></i></span> Meeting Directory</h3>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={{ size: 10, offset: 1 }}>
              <Form>
                <FormGroup>
                  <InputGroup>
                    <Input style={{ backgroundColor: '#A9A9A9', borderColor: '#A9A9A9' }} className="shadow text-white" type="select" name="" id="exampleSelect" onChange={this.handleChangeProgram}>
                      <option>PROGRAM</option>
                      <option>AA</option>
                      <option>Al-Anon</option>
                      <option>NA</option>
                      <option>OA</option>
                    </Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Input style={{ backgroundColor: '#A9A9A9', borderColor: '#A9A9A9' }} className="shadow text-white" type="select" name="" id="exampleSelect" onChange={this.handleChangeCity}>
                    <option>CITY</option>
                    <option>ALISO VIEJO</option>
                    <option>COSTA MESA</option>
                    <option>DANA POINT</option>
                    <option>IRVINE</option>
                    <option>LAGUNA BEACH</option>
                    <option>LAGUNA WOODS</option>
                    <option>LAGUNA HILLS</option>
                    <option>LAKE FOREST</option>
                    <option>MISSION VIEJO</option>
                    <option>NEWPORT BEACH</option>
                    <option>RANCHO SANTA MARGARITA</option>
                    <option>SAN JUAN CAPISTRANO</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Input style={{ backgroundColor: '#A9A9A9', borderColor: '#A9A9A9' }} className="shadow text-white" type="select" name="" id="exampleSelect" onChange={this.handleChangeDay}>
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
                  <Col xs={{ size: 4, offset: 2 }} md={{ size: 3, offset: 3 }}>
                    <Button className="shadow" onClick={this.getMeetings} color="info" size="sm">Search</Button>
                  </Col>
                  <Col xs={{ size: 4 }} md={{ size: 3, offset: 1 }}>
                    <Link to="/favorites">
                      <Button className="shadow" color="secondary" size="sm">Favorites</Button>
                    </Link>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          {this.state.program === 'AA' &&
        <Row className="mt-2">
          <Col md={{ size: 6, offset: 3 }}>
            <Card body inverse color="info">
              <CardTitle className="text-center">Alcoholics Anonymous</CardTitle>
              <CardText>
                <ul>
                  <li>C = Closed, alcholics only</li>
                  <li>O = Open</li>
                  <li>Y = Young People</li>
                  <li>~ = Spanish speaking</li>
                  <li>W = Women's</li>
                  <li>M = Men's</li>
                  <li>GA = Gay</li>
                  <li>CC = Childcare Available</li>
                  <li>BG = Beginner</li>
                  <li>TA = Meditation</li>
                  <li>SP = Speaker</li>
                  <li>SE = Secular</li>
                  <li>TG = Transgender</li>
                </ul>
              </CardText>
            </Card>
          </Col>
        </Row>
          }
          {this.state.program === 'Al-Anon' &&
        <Row className="mt-2">
          <Col md={{ size: 6, offset: 3 }}>
            <Card body inverse color="danger" className="shadow">
              <CardTitle className="text-center">Al-Anon</CardTitle>
              <CardText>
                <ul>
                  <li>O = Open Meetings - Visitors are welcome to attend, but MAY NOT PARTICIPATE</li>
                  <li>W = Wheelchair Accessible</li>
                  <li>B = Beginner's meeting</li>
                  <li>A = Al-Anon and Alateen meetings at the same time and location</li>
                  <li>Y = Al-Anon and Young Alateen meetings at the same time and location</li>
                </ul>
              </CardText>
            </Card>
          </Col>
        </Row>
          }
          {this.state.search === true &&
          this.renderMeetingcards()
          }
        </Container>
      </React.Fragment>
    );
  }
}
