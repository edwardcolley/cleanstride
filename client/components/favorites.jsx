import React from 'react';
import { Container, Row, CardBody } from 'reactstrap';

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
        <Container key={index} className="container">
          <Row className="row flexCentering favoritesCardBody">
            <CardBody className="col-3">
              {data.day}
            </CardBody>
            <CardBody className="col-5">
              {data.name}
            </CardBody>
            <CardBody className="col-4">
              {data.time}
            </CardBody>
          </Row>
        </Container>
      )
      ;
    });

    return (cardCreator);
  }

  render() {
    if (this.state.favorites !== null) {
      return (
        <div>
          <h1 className="display-5 flexCentering">Favorite Meetings</h1>
          {this.favoritesCards()}
        </div>
      );
    } else {
      return (
        <div>loading...</div>
      );
    }
  }
}
