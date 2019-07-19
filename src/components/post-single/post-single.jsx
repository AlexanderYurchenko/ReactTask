import React, { Component } from "react";
import Tags from "../tags/tags";
import Modal from "../modal/modal";
import "./post-single.scss";

class PostSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      isOpen: false
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

  toggleModal = (event) => {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { title, text, tags, author, date, phone } = this.state.post;

    return (
      <div className="c-post-single">
        <div className="c-post-single__title-box">
          <div className="c-post-single__title">{title}</div>
        </div>
        <div className="c-post-single__tags">
          <Tags tags={tags} />
        </div>
        <div className="c-post-single__text">{text}</div>
        <div className="c-post-single__head">
          <a onClick={this.toggleModal} href="#" className="c-post-single__author">{author}</a>
          <span className="c-post-single__date">{date}</span>
        </div>
        
        <Modal 
          isOpen={this.state.isOpen}
          onClose={this.toggleModal}
          author={author}
          phone={phone}/>
      </div>
    );
  }
}

export default PostSingle;
