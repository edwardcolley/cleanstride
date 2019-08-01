import React from 'react';
import { Container, Row, Col, Card, CardTitle, Button } from 'reactstrap';

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: null
    };

    this.getFavorites = this.getFavorites.bind(this);
  }

  getFavorites() {
    fetch('/api/favorites.php')
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          favorites: myJson
        });
      });
  }

  componentDidMount() {
    this.getFavorites();
  }

  favoritesCards() {
    const cardCreator = this.state.favorites.map((data, index) => {
      return (
        <Card key={index} className="mt-3 shadow" body inverse style={{ backgroundColor: '#A9A9A9', borderColor: '#A9A9A9' }}>
          <CardTitle className="cardTitle">{data.name}</CardTitle>
          <Row className="flexCentering favoritesText mt-1">
            <Col xs={{ size: 4 }} md={{ size: 3, offset: 2 }}>
              {data.day}
            </Col>
            <Col xs={{ size: 5 }} md={{ size: 3, offset: 0 }}>
              {data.city}
            </Col>
            <Col xs={{ size: 3 }} md={{ size: 4, offset: 0 }}>
              {data.time}
            </Col>
          </Row>
          <Row>
            <Col className="mt-1">
              {data.address}
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 6 }} md={{ size: 4, offset: 0 }}>
              <Button className="btn btn-primary shadow favoritesCardButton" size="sm">Add To Calendar</Button>
            </Col>
            <Col xs={{ size: 6 }} md={{ size: 4, offset: 0 }}>
              <Button className="btn btn-primary shadow favoritesCardButton favoritesDeleteButtonRightPos" size="sm">Delete</Button>
            </Col>
          </Row>
        </Card>
      )
      ;
    });

    return (cardCreator);
  }

  render() {
    if (this.state.favorites !== null) {
      return (
        <Container>
          <Row className="mt-4">
            <Col xs={{ size: 10, offset: 1 }}>
              <h3 className="text-center text-secondary"><span><i className="fas fa-star"/></span> Favorited Meetings</h3>
            </Col>
          </Row>
          {this.favoritesCards()}
        </Container>
      );
    } else {
      return (
        null
      );
    }
  }
}
