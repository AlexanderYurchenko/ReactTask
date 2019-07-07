import React, { Component } from "react";
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
        <ul className="c-post__tags">
          {tags.map((tag, index) => (
            <li key={index} className="c-post__tag">{tag}</li>
          ))}
          
        </ul>
      </div>
    );
  }
}

export default Post;
