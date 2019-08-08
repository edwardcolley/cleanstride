import React from 'react';

function YelpReview(props) {
  return (
    <React.Fragment>
      <p>{props.input.text}</p>
      <p>-{props.input.user.name}</p>
    </React.Fragment>
  );
}

export default YelpReview;
