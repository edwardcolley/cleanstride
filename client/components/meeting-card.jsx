import React from 'react';
import { Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function Meetingcard(props) {
  return (
    <React.Fragment>
      <Row className="mt-5">
        <Col>
          <Card>
            <CardBody>
              <CardTitle>{props.input.day}</CardTitle>
              <CardSubtitle>{props.input.city}</CardSubtitle>
              <CardSubtitle>{props.input.type}</CardSubtitle>
              <CardSubtitle>{props.input.name}</CardSubtitle>
            </CardBody>
            <CardBody>
              <CardText>{props.input.name}</CardText>
              <CardSubtitle>{props.input.zip}</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Meetingcard;
