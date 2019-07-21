import React, { Component } from "react";
import Post from "../post/post";
import "./posts.scss";

class Posts extends Component {
  state = {
    posts: [],
    refresh: false
  };

  componentWillReceiveProps(props) {
    const { refresh } = this.props;
    if (props.refresh !== refresh) {
      this.setState({ posts: props.posts });
    }

    // console.log(this);
  }

  componentDidMount() {
    this.setState({ posts: this.props.posts });
  }

  render() {
    return (
      <div className="c-posts">
        <h2 className="c-posts__title">Posts List</h2>
        <ul className="c-posts__list">
          {this.state.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
