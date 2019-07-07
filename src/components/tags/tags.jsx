import React from "react";
import "./tags.scss"

const Tags = (props) => {
  return (
    <ul className="c-tags">
      {props.tags.map((tag, index) => (
        <li key={index} className="c-tags__item">
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
