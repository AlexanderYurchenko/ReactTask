import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./filter.scss";

class Filter extends Component {
  state = {
    tags: [],
    refresh: false
  };

  componentWillReceiveProps(props) {
    const { refresh } = this.props;
    if (props.refresh !== refresh) {
      this.setState({ tags: props.tags })
    }
  }

  componentDidMount() {
    this.setState({ tags: this.props.tags })
  }

  formatTag(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  render() {
    const { tags } = this.props;

    return (
      <div className="c-filter">
        <div className="c-filter__center">
          <Link to="/" className="c-filter__logo">
            <svg height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg">
              <path d="m52 10h9a0 0 0 0 1 0 0v15a3 3 0 0 1 -3 3h-6a0 0 0 0 1 0 0v-18a0 0 0 0 1 0 0z" fill="#44add8"/>
              <path d="m41 28v-23h11a3 3 0 0 1 3 3v17a3 3 0 0 0 3 3z" fill="#2275ad"/>
              <path d="m49 59h-39v-51a3 3 0 0 1 3-3h36z" fill="#44add8"/>
              <path d="m24 5h-11a3 3 0 0 0 -3 3v5h39v-5a3 3 0 0 1 3-3z" fill="#3890ce"/>
              <path d="m49 45.11-39 4.034v6.032l39-4.034z" fill="#3890ce"/>
              <path d="m8.987 44.392h51v6h-51z" fill="#88bf40" transform="matrix(-.995 .103 -.103 -.995 73.667 90.984)"/>
              <g fill="#ffc119">
                <path d="m9.431 53-5.282-2.47 4.664-3.498z"/>
                <path d="m50.889 42.488h4v6h-4z" transform="matrix(.995 -.103 .103 .995 -4.4 5.684)"/>
                <path d="m15 18h8v8h-8z"/>
                <path d="m15 31h8v8h-8z"/>
              </g>
              <path d="m3.154 50.633a1 1 0 0 0 .571.8l5.282 2.469.005-.011a.987.987 0 0 0 .419.1c.034 0 .068 0 .1-.005l41.769-4.312h.011l3.979-.412 4.973-.515a1 1 0 0 0 .892-1.1l-.618-5.967a1.007 1.007 0 0 0 -1.1-.893l-6.659.689-2.292.237-41.776 4.324a.974.974 0 0 0 -.486.209l-.011-.014-4.665 3.5a1 1 0 0 0 -.394.901zm50.022-7.185.5-.052.411 3.979-1.989.206-.41-3.981zm5.886 3.412-2.984.309-.411-3.978 2.984-.309zm-9.362-3.052.411 3.978-39.789 4.114-.411-3.978zm-41.7 5.084.253 2.454-2.171-1.016z"/>
              <path d="m61 9h-5v-1a4 4 0 0 0 -4-4h-39a4 4 0 0 0 -4 4v36h2v-30h37v26h2v-11h8a4 4 0 0 0 4-4v-15a1 1 0 0 0 -1-1zm-50 3v-4a2 2 0 0 1 2-2h35.556a3.959 3.959 0 0 0 -.556 2v4zm39-4a2 2 0 0 1 4 0v17a3.959 3.959 0 0 0 .556 2h-4.556zm10 17a2 2 0 0 1 -4 0v-14h4z"/>
              <path d="m13 8h2v2h-2z"/>
              <path d="m17 8h2v2h-2z"/>
              <path d="m21 8h2v2h-2z"/>
              <path d="m15 27h8a1 1 0 0 0 1-1v-8a1 1 0 0 0 -1-1h-8a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1zm1-8h6v6h-6z"/>
              <path d="m32 17h13v2h-13z"/>
              <path d="m26 21h19v2h-19z"/>
              <path d="m26 25h17v2h-17z"/>
              <path d="m28 17h2v2h-2z"/>
              <path d="m14 39a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0 -1-1h-8a1 1 0 0 0 -1 1zm2-7h6v6h-6z"/>
              <path d="m32 30h13v2h-13z"/>
              <path d="m26 34h19v2h-19z"/>
              <path d="m26 38h17v2h-17z"/>
              <path d="m28 30h2v2h-2z"/>
              <path d="m9 56v3a1 1 0 0 0 1 1h39a1 1 0 0 0 1-1v-7h-2v6h-37v-2z"/>
              <path d="m44 54h2v2h-2z"/>
              <path d="m40 54h2v2h-2z"/>
              <path d="m36 54h2v2h-2z"/>
              <path d="m5 12h2v23h-2z"/>
              <path d="m5 37h2v2h-2z"/>
            </svg>
          </Link>
          <div className="c-filter__box">
            <select className="c-filter__select" 
              onChange={(event) => this.props.onFilter(event.target.value)}
            >
              {tags.map((tag, index) => (
                <option className="c-filter__option" key={index}>{this.formatTag(tag)}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
