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
        <CarouselIndicators items={this.state.details.photos} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }

  getDetails() {
    const { match: { params } } = this.props;
    fetch(`/api/yelp_proxy_details.php?location=orange county&categories=recoverycenter&term=${params.name}&photos`)
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

  render() {
    if (this.state.details) {
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
                  <CardBody className="header">
                    <p>{this.state.details.name}</p>
                    <Row>
                      <Col xs={{ size: 6 }}>
                        <p>Yelp: </p>
                      </Col>
                      <Col xs={{ size: 6 }} className="mt-5 mr-6">
                        <StarRatingComponent className="yelpStars" name="Rate" starCount={5} value={this.state.details.rating} starColor={'orange'}/>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={{ size: 6 }}>
                        < p>Google: </p>
                      </Col>
                      <Col xs={{ size: 6 }} className="mt-5">
                        <StarRatingComponent className="googleStars" name="Rate" starCount={5} value={this.state.googleReviews.result.rating} starColor={'gold'}/>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="contactInfoCard shadow style={{ borderColor: ‘rgb(218, 218, 218’ }}>">
                  <CardBody className="contactInfo">
                    <h1>Contact Information</h1>
                    <p>Address: {this.state.details.location.display_address[0]}, {this.state.details.location.display_address[1]}, {this.state.details.location.display_address[2]}</p>
                    <p>Phone: {this.state.details.display_phone}</p>
                  </CardBody>
                </Card>
                <Card className="descriptionCard shadow style={{ borderColor: ‘rgb(218, 218, 218’ }}>">
                  <CardBody className="reviews">
                    <h1>Reviews</h1>
                    <p>{this.state.yelpReviews.reviews[0].text}</p>
                    <p>-{this.state.yelpReviews.reviews[0].user.name}</p>
                    <p>{this.state.yelpReviews.reviews[1].text}</p>
                    <p>-{this.state.yelpReviews.reviews[1].user.name}</p>
                    <p>{this.state.yelpReviews.reviews[2].text}</p>
                    <p>-{this.state.yelpReviews.reviews[2].user.name}</p>
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
          <div className="flexCentering loaderContainer">
            <div className="loader"></div>
          </div>
          <div className="flexCentering loaderText">Loading Details...</div>
        </div>
      );
    }
  }
}
