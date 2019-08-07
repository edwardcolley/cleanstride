/* eslint-disable no-console */
import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, Container } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';

// Reconfigure this list page to pass props through functions and then create an if/else statement
// The if statement will render each version of the sorting method applied per the click chosen

function RecoveryResultsPhoto(props) {
  if (props.photos === undefined) {
    return <CardImg className='resultsImg col-sm-6 mt-3' top width="100%" src="https://lh3.googleusercontent.com/p/AF1QipPjl0ozxg85HqM7_yGSNYPntRrjCfnO15mU3id1=s1600-w500" alt="Card img" />;
  }
  let photoreference = props.photos[0].photo_reference;
  const API_KEY = 'AIzaSyCC4k-zZUEeozf7452tXNKmHntB33napHg';
  const urlFormat = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoreference}&maxwidth=500&key=${API_KEY}`;
  return <CardImg className='resultsImg col-sm-6 mt-3' top width="100%" src={urlFormat} alt="Card img" />;
}

function RecoveryResultsCard(props) {

  if (props.input.formatted_address) {
    return (
      <Container className='Main my-3'>
        <Link to={'/detailspage/' + props.input.name}>
          <Card className="shadow border border-border-secondary rounded-lg text-dark">
            <RecoveryResultsPhoto photos= {props.input.photos}/>
            <CardBody className="cardBody">
              <CardTitle className='cardTitle'>{props.input.name}</CardTitle>
              <CardSubtitle className='ratingsResults'>{props.input.formatted_address}</CardSubtitle>
              <StarRatingComponent
                name="Rate"
                starCount={5}
                value={props.input.rating}
                starColor={'#04ecf0'}
              />
            </CardBody>
          </Card>
        </Link>
      </Container >
    );
  } else {
    return (
      <Container className='Main mt-3'>
        <Card className="shadow" onClick={() => props.onClick('details', { details: props.input })}>
          <RecoveryResultsPhoto photos= {props.input.photos}/>
          <CardBody className="cardBody">
            <CardTitle className='cardTitle'>{props.input.name}</CardTitle>
            <CardSubtitle className='ratingsResults'>{props.input.vicinity}</CardSubtitle>
            <StarRatingComponent
              name="Rate"
              starCount={5}
              value={props.input.rating}
              starColor={'#04ecf0'}
            />
          </CardBody>
        </Card>
      </Container >
    );
  }
}
export default RecoveryResultsCard;
