import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Tags from "../tags/tags";
import PostSingle from "../post-single/post-single";
import "./post.scss"

class Post extends Component {
  render() {
    const { id, title, info, tags } = this.props.post;

    return (
      <div className="c-post">
        <div className="c-post__title-box">
          <Link to={`/post/${id}`} className="c-post__title">{title}</Link>
        </div>
        <div className="c-post__info">{info}</div>
        <div className="c-post__tags">
          <Tags tags={tags} />
        </div>
        {/* <Route path="/post/:id" component={PostSingle} /> */}
        <Route path="/post/:postId"  children={(props) => (
          props.match
            ? <PostSingle {...props}/> : ''
        )}/>
      </div>
    );
  }
}

export default Post;
