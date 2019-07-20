import React, { Component } from "react";
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

  dataSearch = e => {};

  render() {
    const { tags } = this.props;

    return (
      <div className="c-filter">
        <div className="c-filter__center">
          <div className="c-filter__box">
            <select className="c-filter__select" 
              value={optionsState}
              onChange={(event) => this.props.onFilter(event.target.value)}
            >
              {this.state.posts.map((tag, index) => (
                <option className="c-filter__option" key={index}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
      </div>


    );
  }
}

export default Filter;
