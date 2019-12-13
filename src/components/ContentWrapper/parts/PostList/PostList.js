// @flow
import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";

type Props = {
  handler: Function,
  posts: Array<Object>,
}

class PostList extends Component<Props> {
  render() {
    return (
      <ListGroup>
        {this.props.posts.map(post => {
          return (
            <ListGroup.Item key={post.id}
                            onClick={() => {this.props.handler(post.id)}}
                            action>{post.title}</ListGroup.Item>
          )
        })}
      </ListGroup>
    );
  }
}

export default PostList;