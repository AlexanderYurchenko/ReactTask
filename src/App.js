import React, {Component} from "react";
import "./App.css";
import Posts from "./components/posts";
import Filter from "./components/filter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3001/posts"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({posts: data});
      })
  }

  render() { 
    return (  
      <React.Fragment>
        <Filter/>
        <main className="container">
          <Posts
            posts={this.state.posts}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
