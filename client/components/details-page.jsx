import React from 'react';
// import StarRatingComponent from 'react-star-rating-component';
import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from 'reactstrap';
import NavBar from './nav-bar';

export default class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      reviews: null,
      details: null
    };
    this.goToIndex = this.goToIndex.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.onExited = this.onExited.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.carouselPhotos = this.carouselPhotos.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) { return; }
    const nextIndex = this.state.activeIndex === this.state.details.photos.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) { return; }
    const nextIndex = this.state.activeIndex === 0 ? this.state.details.photos.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) { return; }
    this.setState({ activeIndex: newIndex });
  }

  carouselPhotos() {
    if (!this.state.details) {
      return null;
    }
    const { activeIndex } = this.state;
    const slides = this.state.details.photos.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <img src={item} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.state.details.photos} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }

  getDetails() {
    const { match: { params } } = this.props;
    let proxyURL = 'https://cors-anywhere.herokuapp.com/';
    let targetURL1 = `https://api.yelp.com/v3/businesses/search?location=newport beach&categories=recoveryrehabilitation&term=${params.name}&photos`;
    fetch(proxyURL + targetURL1, {
      headers: {
        'Authorization': 'Bearer _l5FHh7iIt2b-IZHeQEvb3L8pmRoIy2pE40et_6aEdVdk8_aDYhvj7ql2RGIW1PDOfOBSDoeRW5pdSzRzKGbSybMdC3wNVY0o-bA0TRfRSO2A9P6lWW1gfRwBNhAXXYx'
      }
    }).then(res => res.json())
      .then(result => {
        let id = result.businesses[0].id;
        let promises = [this.getBusinessReviews(id), this.getBusinessDetails(id)];
        Promise.all(promises).then(allResults => {
          this.setState({
            reviews: allResults[0],
            details: allResults[1]
          });
        });
      });
  }

  getBusinessReviews(id) {
    let proxyURL = 'https://cors-anywhere.herokuapp.com/';
    let targetURL2 = `https://api.yelp.com/v3/businesses/${id}/reviews`;
    return fetch(proxyURL + targetURL2, {
      headers: {
        'Authorization': 'Bearer _l5FHh7iIt2b-IZHeQEvb3L8pmRoIy2pE40et_6aEdVdk8_aDYhvj7ql2RGIW1PDOfOBSDoeRW5pdSzRzKGbSybMdC3wNVY0o-bA0TRfRSO2A9P6lWW1gfRwBNhAXXYx'
      }
    }).then(res => res.json());
  }

  getBusinessDetails(id) {
    let proxyURL = 'https://cors-anywhere.herokuapp.com/';
    let targetURL2 = `https://api.yelp.com/v3/businesses/${id}`;
    return fetch(proxyURL + targetURL2, {
      headers: {
        'Authorization': 'Bearer _l5FHh7iIt2b-IZHeQEvb3L8pmRoIy2pE40et_6aEdVdk8_aDYhvj7ql2RGIW1PDOfOBSDoeRW5pdSzRzKGbSybMdC3wNVY0o-bA0TRfRSO2A9P6lWW1gfRwBNhAXXYx'
      }
    }).then(res => res.json());
  }

  componentDidMount() {
    this.getDetails();
  }

  render() {
    if (this.state.details) {
      return (
        <React.Fragment>
          <NavBar/>
          <Container>
            <Button color="primary" className="detailsPageBackButton" onClick={() => this.props.setView('recoveryresults', {})}>Back</Button>
            <Row>
              <Col>
                <Card className="carouselCard">
                  <CardBody className="carousel">
                    {this.carouselPhotos()}
                  </CardBody>
                </Card>
                <Card className="headerCard">
                  <CardBody className="header">
                    <p>{this.state.details.name}</p>
                    {/* <StarRatingComponent
                      name="Rate"
                      starCount={5}
                      value={this.props.input.rating}
                      starColor={'#04ecf0'}
                    /> */}
                  </CardBody>
                </Card>
                <Card className="contactInfoCard">
                  <CardBody className="contactInfo">
                    <h1>Contact Information</h1>
                    <p>Address: {this.state.details.location.display_address}</p>
                    <p>Phone: {this.state.details.display_phone}</p>
                    <p>Website: {this.state.details.url}</p>
                  </CardBody>
                </Card>
                <Card className="descriptionCard">
                  <CardBody className="description">
                    <h1>Reviews</h1>
                    <p>{this.state.reviews.reviews[0].user.name}</p>
                    <p>{this.state.reviews.reviews[0].text}</p>
                    <p>{this.state.reviews.reviews[1].user.name}</p>
                    <p>{this.state.reviews.reviews[1].text}</p>
                    <p>{this.state.reviews.reviews[2].user.name}</p>
                    <p>{this.state.reviews.reviews[2].text}</p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      );
    } else {
      return (
        <div>
          <div className="flexCentering loaderContainer">
            <div className="loader"></div>
          </div>
          <div className="flexCentering loaderText">Loading Details...</div>
        </div>
      );
    }
  }
}
