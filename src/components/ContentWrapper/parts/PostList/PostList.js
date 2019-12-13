// @flow
import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Post from "./Post/Post";

type Props = {
  handler: Function,
  posts: Array<Object>,
}

class PostList extends Component<Props> {
  render() {
    return (
      <ListGroup>
        {this.props.posts.map(el => {
          return (
            <Post key={el.id}
                  post={el}
                  handler={this.props.handler}/>
          )
        })}
      </ListGroup>
    );
  }
}

export default PostList;