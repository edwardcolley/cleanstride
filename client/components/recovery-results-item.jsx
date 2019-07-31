/* eslint-disable no-console */
import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, CardImg, Container } from 'reactstrap';

function RecoveryResultsPhoto(props) {
  if (props.photos === undefined) {
    return null;
  }
  let photoreference = props.photos[0].photo_reference;
  const API_KEY = 'AIzaSyCC4k-zZUEeozf7452tXNKmHntB33napHg';
  const urlFormat = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoreference}&maxwidth=500&key=${API_KEY}`;
  return <CardImg className='resultsImg col-sm-6' top width="100%" src={urlFormat} alt="Card img" />;
}

function RecoveryResultsCard(props) {
  // console.log('Want to select only the <a></a> tag for th picture:', props.input.photos[0].photo_reference);
  // let link = props.input.photos[0].html_attributions[0];
  // let photos = props.input.photos;
  // let photoreference = props.input.photos[0].photo_reference;
  // const API_KEY = 'AIzaSyCC4k-zZUEeozf7452tXNKmHntB33napHg';
  // const urlFormat = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoreference}&maxwidth=500&key=${API_KEY}`;
  // if (photos === undefined) {
  //   console.log('Test for images');
  // } else {
  //   console.log(urlFormat);
  // }

  return (

    <Container className='Main'>
      <Card className='cardContents' >
        {/* <CardImg top width="100%" src={urlFormat} alt="Card image cap" /> */}
        {/* <CardImg className='resultsImg col-sm-6' top width="100%" src={urlFormat} alt="Card img" /> */}
        <RecoveryResultsPhoto photos= {props.input.photos}/>
        <CardBody className="cardBody">
          <CardTitle className='cardTitle'>{props.input.name}</CardTitle>
          <CardSubtitle className='ratingsResults'>{props.input.formatted_address}</CardSubtitle>
          <CardText className="mt-3 text">
            {props.input.rating}/5 stars<br/>{props.input.user_ratings_total} reviews
          </CardText>
        </CardBody>
      </Card>
    </Container >

  );
}

export default RecoveryResultsCard;
