import React from 'react';
import LandingPage from './landingpage';

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

  componentDidMount() {
    this.getMessage();
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
    }
  }
}
