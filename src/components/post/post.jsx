import React, { Component } from "react";
import Tags from "../tags/tags";
import "./post.scss"

class Post extends Component {
  render() {
    const { title, info, tags } = this.props.post;

    return (
      <div className="c-post">
        <div className="c-post__title-box">
          <a href="#" className="c-post__title">{title}</a>
        </div>
        <div className="c-post__info">{info}</div>
        <div className="c-post__tags">
          <Tags tags={tags} />
        </div>
      </div>
    );
  }
}

export default Post;
