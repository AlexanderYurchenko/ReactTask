import React, { Component } from "react";
import Tags from "../tags/tags";
import Modal from "../modal/modal";
import "./post-single.scss";

class PostSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    // let url = "http://localhost:3002/post"
    const postRegExp = new RegExp("([^\/]+$)")
    const postId = postRegExp.exec(this.props.match.url)
    let url = "https://raw.githubusercontent.com/AlexanderYurchenko/ReactTask/master/src/data/post" + postId[1] + ".json"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({post: data.post});
      })
  }

  handleAuthorClick = (event) => {
    event.preventDefault();
  }

  render() {
    const { title, text, tags, author, date } = this.state.post;

    return (
      <div className="c-post-single">
        <div className="c-post-single__title-box">
          <div className="c-post-single__title">{title}</div>
        </div>
        <div className="c-post-single__head">
          <a onClick={this.handleAuthorClick} href="#" className="c-post-single__author">{author}</a>
          <span className="c-post-single__date">{date}</span>
        </div>
        <div className="c-post-single__tags">
          <Tags tags={tags} />
        </div>
        <div className="c-post-single__text">{text}</div>
        <Modal/>
      </div>
    );
  }
}

export default PostSingle;
