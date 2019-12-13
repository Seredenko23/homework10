// @flow
import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";

type Props = {
  handler: Function,
  users: Array<Object>,
}

class UserList extends Component<Props> {
  render() {
    return (
      <ListGroup>
        {this.props.users.map(user => {
          return (
            <ListGroup.Item key={user.id}
                            onClick={() => {this.props.handler(user.id)}}
                            action>{user.name}</ListGroup.Item>
          )
        })}
      </ListGroup>
    );
  }
}

export default UserList;