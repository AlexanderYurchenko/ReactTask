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
    // let url = "http://localhost:3002/post"
    const postRegExp = new RegExp("([^\/]+$)")
    const postId = postRegExp.exec(this.props.match.url)
    console.log(postId[1])
    let url = "https://raw.githubusercontent.com/AlexanderYurchenko/ReactTask/master/src/data/post" + postId[1] + ".json"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({post: data.post});
      })
  }

  render() {
    console.log(this)
    const { title, text, tags } = this.state.post;

    return (
      <div className="c-post-single">
        <div className="c-post-single__title-box">
          <div className="c-post-single__title">
            {title}
          </div>
        </div>
        <div className="c-post-single__text">
        {text}
        </div>
        <div className="c-post-single__tags">
          <Tags tags={tags} />
        </div>
      </div>
    );
  }
}

export default PostSingle;
