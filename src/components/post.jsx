import React, { Component } from "react";

class Post extends Component {
  render() {
    const { title, info, tags } = this.props.post;

    return (
      <div className="post">
        <div className="post-title">{title}</div>
        <div className="post-info">{info}</div>
        <ul className="post-tags">
          {tags.map(tag => (
            <li className="post-tag">{tag}</li>
          ))}
          
        </ul>
      </div>
    );
  }
}

export default Post;
