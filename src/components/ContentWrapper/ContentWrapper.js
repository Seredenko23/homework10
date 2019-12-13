// @flow
import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import UserList from "./parts/UserList/UserList";
import PostList from "./parts/PostList/PostList"

type Props = {
  userHandler: Function,
  postHandler: Function,
  users: Array<Object>,
  posts: Array<Object>,
  comments: Array<Object>
}

class ContentWrapper extends Component<Props> {
  render() {
    return (
      <Container className="justify-content-center">
        <Row>
          <Col>
            <UserList users={this.props.users}
                      handler={this.props.userHandler} />
          </Col>
          <Col>
            <PostList posts={this.props.posts}
                      handler={this.props.postHandler} />
          </Col>
        </Row>
        <Row>
          <Col>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContentWrapper;