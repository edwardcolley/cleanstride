import React from 'react';
import LandingPage from './landingpage';
import LoadingPage from './loadingpage';
import DetailsPage from './details-page';
import Meetings from './meeting-page';
import RecoveryResults from './recoveryresults';
import Calendar from './calendar-page';

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
          <LandingPage setView={this.setView}/>
        </React.Fragment>
      );
    } else if (this.state.view.name === 'recoveryresults') {
      return (
        <RecoveryResults setView={this.setView} params={this.state.view.params}/>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <DetailsPage setView={this.setView} data={this.state.view.params.details}/>
      );
    } else if (this.state.view.name === 'meetings') {
      return (
        <Meetings />
      );
    } else if (this.state.view.name === 'loading') {
      return (
        <LoadingPage setView={this.setView}/>
      );
    } else if (this.state.view.name === 'calendar') {
      return (
        <div className="App">
          <header>
            <div id="logo">
              <span className="icon">date_range</span>
              <span>
              meeting<b> calendar</b>
              </span>
            </div>
          </header>
          <main>
            <Calendar />
          </main>
        </div>
      );
    }
  }
}
