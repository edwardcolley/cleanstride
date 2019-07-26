import React from 'react';
import LandingPage from './landingpage';
import Meetings from './meetings';
import LoadingPage from './loadingpage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'landing',
        params: {}
      }
    };
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
      return null;
    } else if (this.state.view.name === 'meetings') {
      return (
        <Meetings />
      );
    } else if (this.state.view.name === 'loading'){
      return( 
        <LoadingPage setView={this.setView}/>
      );
    }
  }
}
