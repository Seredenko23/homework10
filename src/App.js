//@flow
import React from 'react';
import './App.css';
import Button from "react-bootstrap/Button";
import request from "./services/request";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";

type Props = null;

type State = {
  users: Array<Object>,
  posts: Array<Object>,
  comments: Array<Object>,
  alertMessage: string,
};

class App extends React.Component<Props, State> {
  state = {
    users: [],
    posts: [],
    comments: [],
    alertMessage: ''
  };

  buttonHandler = (event: SyntheticEvent<HTMLButtonElement>) => {
    request('/users')
      .then(res => {
        this.setState({
          users: res.body,
          alertMessage: 'Here is users!'
        })
      }).catch(e => {
      this.setState({
        alertMessage: e
      })
    })
  };

  userHandler = (id: number) => {
    request(`/posts?userId=${id}`)
      .then(res => {
        this.setState({
          posts: res.body,
          alertMessage: 'Here is posts!'
        })
      }).catch(e => {
      this.setState({
        alertMessage: e
      })
    })
  };

  postHandler = (id: number) => {
    request(`/comments?postId=${id}`)
      .then(res => {
        this.setState({
          comments: res.body,
          alertMessage: 'Here is comments!'
        })
      }).catch(e => {
      this.setState({
        alertMessage: e
      })
    })
  };

  render() {
    return (
      <div className="App">
        <Button onClick={this.buttonHandler}>
          Get users
        </Button>
        <ContentWrapper userHandler={this.userHandler}
                        postHandler={this.postHandler}
                        users={this.state.users}
                        posts={this.state.posts}
                        comments={this.state.comments}
                        alertMessage={this.state.alertMessage}/>
      </div>
    );
  }
}

export default App;
