import React, {Component} from 'react';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { getComments } from "../../../../../services/request";
import Spinner from "react-bootstrap/Spinner";
import Badge from "react-bootstrap/Badge";

type Props = {
  key: number,
  post: Object,
  handler: Function,
}

type State = {
  isLoading: boolean,
  commentAmount: number,
}

class Post extends Component<Props, State> {
  state = {
    isLoading: true,
    commentAmount: 0,
  };

  componentDidMount() {
    getComments(this.props.post.id)
      .then(res => {
        this.setState({
          isLoading: false,
          commentAmount: res.body.length,
        })
      })
  }

  render() {
    return (
      <ListGroupItem className={'d-flex justify-content-between'}
                     onClick={() => {this.props.handler(this.props.post.id)}}
                     action>
        {this.props.post.title}
        {this.state.isLoading ? <Spinner animation="border" />
                              : <Badge variant="primary">{this.state.commentAmount}</Badge>}
      </ListGroupItem>
    );
  }
}

export default Post;