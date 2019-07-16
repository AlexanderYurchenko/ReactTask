import React, { Component } from "react";
import "./tags.scss"

class Tags extends Component {
  recieveTags() {
    if (this.props.tags) {
      const res = this.props.tags.map((tag, index) => (
        <li key={index} className="c-tags__item">
          {tag}
        </li>
      ))
      return res
    }
  }

  render() { 
    return (
      <ul className="c-tags">
        {this.recieveTags()}
      </ul>
    );
  }
}

export default Tags;
