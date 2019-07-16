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

  componentWillReceiveProps(props) {
    // console.log('componentWillReceiveProps')
    // console.log(props)
  }

  componentDidMount() {
    // console.log('componentDidMount')
    let url = "http://localhost:3002/post"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({post: data});
      })
      // console.log(this)
  }

  render() {
    // console.log(this)
    const { title, text, tags } = this.state.post;
    // console.log(this.props.match.params.postId)
    // console.log(this.state.post)

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
