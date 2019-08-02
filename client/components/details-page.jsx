import React from 'react';
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
const items = [
  {
    // src: '{this.state.centers.items[0].pagemap.cse_image[0].src}',
    // altText: 'photo1',
    // caption: 'photo1',
    src: 'https://cdn0.sussexdirectories.com/rms/rms_photos/sized/24/49/364924-1126760-1_1500x1500.jpg?pu=1511989191',
    altText: 'photo1',
    caption: 'photo1'
  },
  {
    src: 'https://cdn4.sussexdirectories.com/rms/rms_photos/sized/24/49/364924-1126761-1_1500x1500.jpg?pu=1511989209',
    altText: 'photo2',
    caption: 'photo2'
  },
  {
    src: 'https://cdn2.sussexdirectories.com/rms/rms_photos/sized/24/49/364924-1126758-1_1500x1500.jpg?pu=1511989182',
    altText: 'photo3',
    caption: 'photo3'
  }
];
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
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }
  previous() {
    if (this.animating) { return; }
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }
  goToIndex(newIndex) {
    if (this.animating) { return; }
    this.setState({ activeIndex: newIndex });
  }
  carouselPhotos() {
    const { activeIndex } = this.state;
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
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
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
  getDetails() {
    let proxyURL = 'https://cors-anywhere.herokuapp.com/';
    let targetURL1 = `https://api.yelp.com/v3/businesses/search?location=newport beach&categories=recoveryrehabilitation&term=${this.props.data.name}&photos`;
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
                  <h1></h1>
                  <p>Name: {this.state.details.name}</p>
                  <p>Rating: {this.state.details.rating}/5</p>
                </CardBody>
              </Card>
              <Card className="contactInfoCard">
                <CardBody className="contactInfo">
                  <h1>Contact Information</h1>
                  <p>Address: {this.state.details.location.display_address}</p>
                  <p>Phone: {this.state.details.display_phone}</p>
                </CardBody>
              </Card>
              <Card className="descriptionCard">
                <CardBody className="description">
                  <h1>Reviews</h1>
                  {/* <p>{this.state.reviews[0].text}</p> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
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
// getDetails() {
//   let targetURL2 = `https://api.yelp.com/v3/businesses/${this.state.details.businesses.id}/reviews`;
//   let targetURL1 = `https://api.yelp.com/v3/businesses/search?location=newport beach&categories=recoveryrehabilitation&term=${this.props.data.name}&photos`;
//   let targetURL2 = `https://api.yelp.com/v3/businesses/${this.state.details.businesses.id}/reviews`;
//   Promise.all([
//     fetch(proxyURL + targetURL1, {
//       headers: {
//         'Authorization': 'Bearer _l5FHh7iIt2b-IZHeQEvb3L8pmRoIy2pE40et_6aEdVdk8_aDYhvj7ql2RGIW1PDOfOBSDoeRW5pdSzRzKGbSybMdC3wNVY0o-bA0TRfRSO2A9P6lWW1gfRwBNhAXXYx'
//       }
//     }).then(res => res.json()),
//     fetch(proxyURL + targetURL2, {
//       headers: {
//         'Authorization': 'Bearer _l5FHh7iIt2b-IZHeQEvb3L8pmRoIy2pE40et_6aEdVdk8_aDYhvj7ql2RGIW1PDOfOBSDoeRW5pdSzRzKGbSybMdC3wNVY0o-bA0TRfRSO2A9P6lWW1gfRwBNhAXXYx'
//       }
//     }).then(res => res.json())
//   ])
//     .then(result => {
//       this.setState({ details: result });
//     });
// }
