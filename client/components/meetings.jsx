import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Meetings extends React.Component {

  render() {
    return (
      <Container xs={{ fluid: true }}>
        <Row>
          <Col xs={{ size: 10, offset: 1 }}>
            <Form>
              <FormGroup>
                <Label for="exampleSelect"></Label>
                <Input type="select" name="" id="exampleSelect">
                  <option>Program</option>
                  <option>AA</option>
                  <option>Al-Anon</option>
                  <option>NA</option>
                  <option>OA</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect"></Label>
                <Input type="select" name="" id="exampleSelect">
                  <option>City</option>
                  <option>Laguna Hills</option>
                  <option>Newport Beach</option>
                  <option>Lake Forest</option>
                  <option>Rancho Santa Margarita</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect"></Label>
                <Input type="select" name="" id="exampleSelect">
                  <option>Day</option>
                  <option>Sunday</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                </Input>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
