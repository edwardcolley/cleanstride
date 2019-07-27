import React from 'react';
import { Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

function Meetingcard(props) {
  return (
    <React.Fragment>
      <Row className="mt-5">
        <Col md={{ size: 6, offset: 3 }} lg={{ size: 3, offset: 2 }}>
          <Card className="shadow" body inverse style={{ backgroundColor: '#A9A9A9', borderColor: '#A9A9A9' }}>
            <CardBody>
              <CardTitle>{props.input.day}</CardTitle>
              <CardSubtitle >{props.input.city}</CardSubtitle>
              <CardSubtitle className="mt-1">{props.input.type}</CardSubtitle>
              <CardSubtitle>{props.input.name}</CardSubtitle>
              <CardSubtitle className="mt-1">{props.input.time}</CardSubtitle>
              <CardText className="mt-2">{props.input.address}</CardText>
              <CardSubtitle>{props.input.zip}</CardSubtitle>
              <Button className="mt-2" color="primary">Favorite</Button>{' '}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Meetingcard;
