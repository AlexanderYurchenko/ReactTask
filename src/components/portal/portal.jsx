import { Component } from "react";
import ReactDOM from 'react-dom';
import "./portal.scss";

class Portal extends Component {
  el = document.createElement('div');
  
  componentDidMount() {
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    document.body.removeChild(this.el)
  }

  render() {
    return (
      ReactDOM.createPortal(this.props.children, this.el)
    );
  }
}

export default Portal;
