import React from "react";
import NavBar from './nav-bar';
import { Container, Row, Col, Form, FormGroup, Input, Button, Card, CardText, InputGroup, Navbar, CardBody } from 'reactstrap';

export default class Favorites extends React.Component{
    constructor(props){
        super(props);

    }

    favoritesCards(){
        const cardCreator = this.props.favorites.map(data => {
            return(
            <Container className="container">
                <Row className="row flexCentering favoritesCardBody">
                    <CardBody className="col-3">
                        {data.day}
                    </CardBody>
                    <CardBody className="col-5">
                        {data.name}
                    </CardBody>
                    <CardBody className="col-4">
                        {data.time}
                    </CardBody>
                </Row>
            </Container>  
        )})

        return (cardCreator);
    }

    render(){
        console.log("favorites page props: ", this.props);
        return(
            <div>
                <NavBar setView={this.props.setView}/>
                <h1 className="display-5 flexCentering">Favorite Meetings</h1>
                {this.favoritesCards()}
            </div>
        )
    }
}