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
    return fetch(`/api/yelp_proxyreviews.php?id=${id}`)
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
            {/* <Button color="primary" className="detailsPageBackButton" onClick={() => this.props.setView('recoveryresults', {})}>Back</Button> */}
            <Row>
              <Col>
                <Card className="carouselCard shadow">
                  <CardBody className="carousel">
                    {this.carouselPhotos()}
                  </CardBody>
                </Card>
                <Card className="headerCard shadow">
                  <CardBody className="header">
                    <p>{this.state.details.name}</p>
                    <StarRatingComponent
                      name="Rate"
                      starCount={5}
                      value={this.state.details.rating}
                      starColor={'#04ecf0'}
                    />
                    <p className="review-count">{this.state.details.review_count} Reviews</p>
                  </CardBody>
                </Card>
                <Card className="contactInfoCard shadow">
                  <CardBody className="contactInfo">
                    <h1>Contact Information</h1>
                    <p>Address: {this.state.details.location.display_address}</p>
                    <p>Phone: {this.state.details.display_phone}</p>
                    <p>Website: {this.state.details.url}</p>
                  </CardBody>
                </Card>
                <Card className="descriptionCard shadow">
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
