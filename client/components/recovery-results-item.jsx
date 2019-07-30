import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

function RecoveryResultsCard(props) {

  return (
    <Card onClick={() => props.onClick('details', { details: props.input })}>
      {/* <CardImg top width="100%" src={props.input.icon} alt="Card image cap" /> */}
      <CardBody>
        <CardTitle>{props.input.name}</CardTitle>
        <CardSubtitle>{props.input.formatted_address}</CardSubtitle>
        <CardText className="mt-3">
          <p>{props.input.rating}/5 stars<br/>{props.input.user_ratings_total} reviews</p>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default RecoveryResultsCard;
