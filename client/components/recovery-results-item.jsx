/* eslint-disable no-console */
import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg, Container } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

function RecoveryResultsPhoto(props) {
  if (props.photos === undefined) {
    return <CardImg className='resultsImg col-sm-6' top width="100%" src="https://lh3.googleusercontent.com/p/AF1QipPjl0ozxg85HqM7_yGSNYPntRrjCfnO15mU3id1=s1600-w500" alt="Card img" />;
  }
  let photoreference = props.photos[0].photo_reference;
  const API_KEY = 'AIzaSyCC4k-zZUEeozf7452tXNKmHntB33napHg';
  const urlFormat = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoreference}&maxwidth=500&key=${API_KEY}`;
  return <CardImg className='resultsImg col-sm-6' top width="100%" src={urlFormat} alt="Card img" />;
}

function RecoveryResultsCard(props) {
  return (
    <Container className='Main mt-3'>
      <Card onClick={() => props.onClick('details', { details: props.input })}>
        <RecoveryResultsPhoto photos= {props.input.photos}/>
        <CardBody className="cardBody">
          <CardTitle className='cardTitle'>{props.input.name}</CardTitle>
          <CardSubtitle className='ratingsResults'>{props.input.formatted_address}</CardSubtitle>
          <CardText className="mt-3 text">
            <div>
              <StarRatingComponent
                name="Rate"
                starCount={5}
                value={props.input.rating}
                starColor={'#04ecf0'}
              />
            </div>
            <br/>
            {props.input.user_ratings_total} reviews
          </CardText>
        </CardBody>
      </Card>
    </Container >
  );
}

export default RecoveryResultsCard;
