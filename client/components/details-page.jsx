import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import NavBar from './nav-bar';
import GoogleReview from './google-review';
import YelpReview from './yelp-review';

export default class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      yelpReviews: null,
      details: null,
      googleReviews: null
    };
    this.goToIndex = this.goToIndex.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.onExited = this.onExited.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.carouselPhotos = this.carouselPhotos.bind(this);
    this.getBusinessName = this.getBusinessName.bind(this);
    this.renderGoogleReviews = this.renderGoogleReviews.bind(this);
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
        </CarouselItem>
      );
    });
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.state.details.photos} activeIndex={activeIndex} interval={1000} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }

  getBusinessName() {
    const { match: { params } } = this.props;
    let str = params.name;
    if (str.length > 30) {
      let name = str.slice(0, 25);
      return name;
    } else {
      return str;
    }
  }

  getDetails() {
    fetch(`/api/yelp_proxy_details.php?location=orange county&categories=recoverycenter&term=${this.getBusinessName()}&photos`)
      .then(res => res.json())
      .then(result => {
        let id = result.businesses[0].id;
        let promises = [this.getYelpReviews(id), this.getGoogleReviews(), this.getBusinessDetails(id)];
        Promise.all(promises).then(allResults => {
          this.setState({
            yelpReviews: allResults[0],
            googleReviews: allResults[1],
            details: allResults[2]
          });
        });
      });
  }

  getYelpReviews(id) {
    return fetch(`/api/yelp_proxyreviews.php?id=${id}`)
      .then(res => res.json());
  }

  getGoogleReviews() {
    const { match: { params } } = this.props;
    return fetch(`/api/googlereviews_proxy.php?key=AIzaSyCC4k-zZUEeozf7452tXNKmHntB33napHg&place_id=${params.place_id}`)
      .then(res => res.json());
  }

  getBusinessDetails(id) {
    return fetch(`/api/yelp_proxyID.php?id=${id}`)
      .then(res => res.json());
  }

  componentDidMount() {
    this.getDetails();
  }

  renderGoogleReviews() {
    return (
      this.state.googleReviews.result.reviews.map((input, index) => {
        return (
          <GoogleReview key={index} input={input} />
        );
      })
    );
  }

  renderYelpReviews() {
    return this.state.yelpReviews.reviews.map(input => {
      return (
        <YelpReview key={input.id} input={input} />
      );
    });
  }

  render() {
    if (this.state.details) {
      const ratingCount = this.state.googleReviews.result.user_ratings_total;
      return (
        <React.Fragment>
          <NavBar/>
          <Container>
            <Row>
              <Col>
                <Card className="carouselCard shadow style={{ borderColor: ‘rgb(218, 218, 218’ }}>">
                  <CardBody className="carousel">
                    {this.carouselPhotos()}
                  </CardBody>
                </Card>
                <Card className="headerCard shadow style={{ borderColor: ‘rgb(218, 218, 218’ }}>">
                  <CardBody className="detailsHeader">
                    <p className="font-weight-bold">{this.state.googleReviews.result.name}</p>
                    <Row>
                      <Col xs={{ size: 8 }} className="mt-1">
                        <p className="yelpRatingsFont font-weight-bold">Yelp: <span className="font-weight-light">{this.state.details.rating} reviews, {this.state.details.rating}/5</span> </p>
                        <p className="googleRatingsFont font-weight-bold mt-1">Google: <span className="font-weight-light">{ratingCount ? ratingCount : 0} reviews, {ratingCount ? ratingCount : 0}/5</span></p>
                      </Col>
                      <Col xs={{ size: 4 }} className="mt-5">
                        <StarRatingComponent className="yelpStars" name="Rate" starCount={5} value={this.state.details.rating} starColor={'orange'}/>
                        <StarRatingComponent className="googleStars" name="Rate" starCount={5} value={this.state.googleReviews.result.rating} starColor={'gold'}/>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="contactInfoCard shadow style={{ borderColor: ‘rgb(218, 218, 218’ }}>">
                  <CardBody className="contactInfo">
                    <h1>Contact Information</h1>
                    <p><span className="font-weight-bold">Address: </span>{this.state.googleReviews.result.formatted_address}</p>
                    <p><span className="font-weight-bold">Phone: </span>{this.state.googleReviews.result.formatted_phone_number}</p>

                  </CardBody>
                </Card>
                <Card className="descriptionCard shadow style={{ borderColor: ‘rgb(218, 218, 218’ }}>">
                  <CardBody className="googleReviewsCard">
                    <h1 className="googleReviewTitle">Google Reviews</h1>
                    {this.state.googleReviews.result.reviews &&
                      this.renderGoogleReviews()}
                    {!this.state.googleReviews.result.reviews &&
                    <p> At this moment this location has no reviews. Thank You <br/> </p> }
                    <a href={this.state.googleReviews.result.url}>Link to Google</a>
                  </CardBody>
                </Card>
                <Card className=" mt-2 descriptionCard shadow style={{ borderColor: ‘rgb(218, 218, 218’ }}>">
                  <CardBody className="yelpReviewsCard">
                    <h1 className="yelpReviewTitle">Yelp Reviews</h1>
                    {this.renderYelpReviews()}
                    <a href={this.state.details.url}>Link to Yelp</a>
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
          <NavBar/>
          <div className="flexCentering loaderContainer">
            <div className="loader"></div>
          </div>
          <div className="flexCentering loaderText">Loading Details...</div>
        </div>
      );
    }
  }
}
