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
  comments: Array<Object>
};

class App extends React.Component<Props, State> {
  state = {
    users: [],
    posts: [],
    comments: []
  };

  buttonHandler = (event: SyntheticEvent<HTMLButtonElement>) => {
    request('/users')
      .then(res => {
        this.setState({
           users: res.body,
        })
      })
  };

  userHandler = (id: number) => {
    request(`/posts?userId=${id}`)
      .then(res => {
        this.setState({
          posts: res.body
        })
      })
  };

  postHandler = (id: number) => {
    request(`/comments?postId=${id}`)
      .then(res => {
        this.setState({
          comments: res.body
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
                        comments={[]}/>
      </div>
    );
  }
}

export default App;
