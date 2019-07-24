import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: []
    };
    this.getMessage = this.getMessage.bind(this);
  }

  getMessage() {
    fetch('/api/endpoint.php')
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
    return (
      <div>hello
        {this.state.message.message}
      </div>
    );
  }
}
