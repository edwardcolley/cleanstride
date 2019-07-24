import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: []
    };
  }

  getMessage() {
    fetch('/api/endpoint.php', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          message: myJson
        });
      });
  }

  componentDidMount() {
    this.getMessage();
  }

  render() {
    if (this.state.message[0] !== undefined) {
      return (
        <div> {this.state.message[0].message}
        </div>
      );
    } else {
      return <div>nothing rendered</div>;
    }
  }
}
