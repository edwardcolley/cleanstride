import React from 'react';

function GoogleReview(props) {
  return (
    <React.Fragment>
      <p>{props.input.text}</p>
      <p>-{props.input.rating}/5 stars <br />{props.input.author_name}</p>
    </React.Fragment>
  );
}

export default GoogleReview;
