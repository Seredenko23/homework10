// @flow
import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";

type Props = {
  comments: Array<Object>,
}

class CommentList extends Component<Props> {

  render() {
    return (
      <ListGroup>
        {this.props.comments.map(comment => {
          return (
            <ListGroup.Item
              className={'d-flex flex-column'}
              key={comment.id}
            >
              <b>{comment.name}</b>
              <span>{comment.body}</span>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    );
  }
}

export default CommentList;