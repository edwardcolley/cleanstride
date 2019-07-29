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
  CarouselCaption
} from 'reactstrap';

const photos = [
  {
    src: 'carousel1.png',
    altText: 'photo1',
    caption: 'photo1'
  },
  {
    src: 'carousel2.png',
    altText: 'photo2',
    caption: 'photo2'
  },
  {
    src: 'carousel3.png',
    altText: 'photo2',
    caption: 'photo2'
  }
];

export default class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    { activeIndex: 0 };
    { null; }

    this.goToIndex = this.goToIndex.bind(this);
    this.previousIndex = this.previous.bind(this);
    this.nextIndex = this.next.bind(this);
    this.onExited = this.onExited.bind(this);
    this.onExiting = this.onExiting.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  nextIndex() {
    if (this.animating) {
      return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  }

  previousIndex() {
    if (this.animating) {
      return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  }

  goToIndex(newIndex) {
    if (this.animating) {
      return;
      this.setState({ activeIndex: newIndex });
    }
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyCDfSs7m4X6jeepCTsFxLrhu6MXrDQtBG4&cx=017903074074624854424:2a98z0iuzye&q=recoverycenters')
      .then(res => res.json())
      .then(result => {
        this.setState({ centers: result });
      });
  }

  render() {
    // const { activeIndex } = this.state;

    // const slides = items.map((item) => {
    //   return (
    //     <CarouselItem
    //     onExiting={this.onExiting}
    //       onExited={this.onExited}
    //       key={item.src}
    //     >
    //       <img src={item.src} alt={item.altText} />
    //       <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
    //     </CarouselItem>
    //   );
    // }

    return (
      <Container>
        <Row>
          <Col>
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
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="headerCard">
              <CardBody className="header">
                <h1></h1>
                <p>Name: </p>
                <p>Rating: </p>
              </CardBody>
            </Card>
            <Card className="contactInfoCard">
              <CardBody className="contactInfo">
                <h1>Contact Information</h1>
                <p>Name: </p>
                <p>Address: </p>
                <p>Phone: </p>
              </CardBody>
            </Card>
            <Card className="descriptionCard">
              <CardBody className="description">
                <h1>Description</h1>
                <p>{this.state.centers.items[0].pagemap.website[0].description}</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
