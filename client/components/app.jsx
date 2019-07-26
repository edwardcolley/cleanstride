import React from 'react';
import LandingPage from './landingpage';
import LoadingPage from './loadingpage';
import DetailsPage from './details-page';
import Meetings from './meeting-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centers: [],
      view: {
        name: 'landing',
        params: {}
      }
    };
    this.setState = this.setState.bind(this);
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  render() {
    if (this.state.view.name === 'landing') {
      return (
        <React.Fragment>
          <LandingPage onclick={this.setView}/>
        </React.Fragment>
      );
    } else if (this.state.view.name === 'recoveryresults') {
      return <DetailsPage/>;
    } else if (this.state.view.name === 'meetings') {
      return (
        <Meetings />
      );
    } else if (this.state.view.name === 'loading') {
      return (
        <LoadingPage setView={this.setView}/>
      );
    }
  }
}
