import React, { Component } from "react";
import Tags from "../tags/tags";
import "./post-single.scss";

class PostSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3002/post"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({post: data});
      })
  }

  render() {
    const { title, text, tags } = this.props.post;

    return (
      <div className="c-post-single">
        <div className="c-post-single__title-box">
          <a href="#" className="c-post-single__title">
            {title}
          </a>
        </div>
        <div className="c-post-single__text">{text}</div>
        <ul className="c-post-single__tags">
          <Tags tags={tags} />
        </ul>
      </div>
    );
  }
}

export default PostSingle;
