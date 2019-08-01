import React from 'react';
import { Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Meetingcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false
    };
  }

  reRender() {
    this.props.addFavorite(this.props.input);
    this.setState({
      favorited: true
    });
  }

  render() {
    return (
      <React.Fragment>
        <Row className="mt-5">
          <Col md={{ size: 6, offset: 3 }}>
            <Card className="shadow" body inverse style={{ backgroundColor: '#A9A9A9', borderColor: '#A9A9A9' }}>
              <CardBody>
                {this.props.input.favorite === 'true' &&
                <div className="favoritedImg"></div>
                }
                {this.state.favorited === true &&
                <div className="favoritedImg"></div>
                }
                <CardTitle>{this.props.input.day}</CardTitle>
                <CardSubtitle >{this.props.input.city}</CardSubtitle>
                <CardSubtitle className="mt-1">{this.props.input.type}</CardSubtitle>
                <CardSubtitle>{this.props.input.name}</CardSubtitle>
                <CardSubtitle className="mt-1">{this.props.input.time}</CardSubtitle>
                <CardText className="mt-2">{this.props.input.address}</CardText>
                <CardSubtitle>{this.props.input.zip}</CardSubtitle>
                <Button onClick={() => this.reRender()} className="mt-2" color="primary">Favorite</Button>{' '}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Meetingcard;
