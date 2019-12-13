//@flow
import React from 'react';
import './App.css';
import Button from "react-bootstrap/Button";
import request from "./services/request";

type Props = null;

type State = {
  users: Array<Object>,
};

class App extends React.Component<Props, State> {
  state = {
    users: [{}]
  };

  buttonHandler = (event: SyntheticEvent<HTMLButtonElement>) => {
    request('/users')
      .then(res => {
        this.setState({
           users: res.body,
        })
      })
  };

  render() {
    return (
      <div className="App">
        <Button onClick={this.buttonHandler}>
          Get users
        </Button>
      </div>
    );
  }
}

export default App;
