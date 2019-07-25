import React from 'react';
import { Container, FormGroup, Label, Input } from 'reactstrap';

export class Meetings extends React.Component {

  render() {
    return (
      <Container>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>AA</option>
            <option>Al-Anon</option>
            <option>NA</option>
            <option>OA</option>
          </Input>
        </FormGroup>
      </Container>
    );
  }
}
