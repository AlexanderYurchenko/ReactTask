import React, { Component } from "react";
import Post from "./post";

class Posts extends Component {
  render() {
    const { posts } = this.props;

    return (
      <ul className="posts">
        {posts.map(post => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
      </ul>
    );
  }
}

export default Posts;
