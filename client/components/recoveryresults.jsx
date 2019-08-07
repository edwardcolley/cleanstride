import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container } from 'reactstrap';
import RecoveryResultsCard from './recovery-results-item';

import { Link } from 'react-router-dom';
import NavBar from './nav-bar';

class RecoveryResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googleResult: null,
      searchZone: '',
      latitude: undefined,
      longitude: undefined,
      dropdownOpen: false
    };
    this.renderRecoveryCard = this.renderRecoveryCard.bind(this);
    this.handleDescendingRating = this.handleDescendingRating.bind(this);
    this.handleAscendingRating = this.handleAscendingRating.bind(this);
    this.getGooglePlacesListFromCoords = this.getGooglePlacesListFromCoords.bind(this);
    this.toggle = this.toggle.bind(this);

  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  getGooglePlacesList(userInput) {
    // let proxyURL = 'https://cors-anywhere.herokuapp.com/';
    // let targetURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyCC4k-zZUEeozf7452tXNKmHntB33napHg&inputtype=textquery&input=recovery centers in ${userInput}&fields=formatted_address,url,website,geometry,icon,name,photos,opening_hours,price_level,place_id,plus_code,types&circle=50000`;
    fetch(`/api/googletextsearch_proxy.php?key=AIzaSyCC4k-zZUEeozf7452tXNKmHntB33napHg&inputtype=textquery&input=recovery centers in ${userInput}&fields=formatted_address,url,website,geometry,icon,name,photos,opening_hours,price_level,place_id,plus_code,types&circle=50000`)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          googleResult: myJson.results
        });
      });
  }

  getGooglePlacesListFromCoords(coords) {
    // let proxyURL = 'https://cors-anywhere.herokuapp.com/';
    // let targetURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCC4k-zZUEeozf7452tXNKmHntB33napHg&radius=50000&location=${coords}&type=rehab, recovery, addiction&keyword=rehab, recovery, addiction`;
    fetch(`/api/googlenearbysearch_proxy.php?key=AIzaSyCC4k-zZUEeozf7452tXNKmHntB33napHg&radius=50000&location=${coords}&type=rehab, recovery, addiction&keyword=rehab, recovery, addiction`)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          googleResult: myJson.results
        });
      });
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    if (params.id.length < 20) {
      this.getGooglePlacesList(params.id);
    } else {
      this.getGooglePlacesListFromCoords(params.id);
    }
  }
  handleDescendingRating() {
    let currentList = this.state.googleResult;
    this.setState({
      googleResult: currentList.sort((a, b) => a.rating - b.rating)
    });
  }
  handleAscendingRating() {
    let currentList = this.state.googleResult;
    if (currentList) {
      this.setState({
        googleResult: currentList.sort((a, b) => b.rating - a.rating)
      });
    }
  }

  renderRecoveryCard() {
    if (this.state.googleResult) {
      return this.state.googleResult.map(input => {
        return (
          <Link to={'/detailspage/' + input.name} key={input.id}>
            <RecoveryResultsCard input={input}/>
          </Link>
        );
      });
    }
  }

  render() {
    if (this.state.googleResult || this.state.latitude) {
      return (
        <div>
          <NavBar />
          <Container>
            <Dropdown className= 'mt-3 d-flex flex-row-reverse bd-highlight ' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret >
                SORT LIST
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem header>Features</DropdownItem>
                <DropdownItem onClick={this.handleDescendingRating} >Rating: Low to High</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick = {this.handleAscendingRating} >Rating: High to Low</DropdownItem>
                <DropdownItem divider />

              </DropdownMenu>
            </Dropdown>
            {this.renderRecoveryCard()}
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <div className="flexCentering loaderContainer">
            <div className="loader"></div>
          </div>
          <div className="flexCentering loaderText">Loading Results...</div>
        </div>
      );
    }
  }
}
export default RecoveryResults;
