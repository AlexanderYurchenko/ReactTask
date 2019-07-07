import React, {Component} from "react";
import "./App.scss";
import Posts from "./components/posts/posts";
import Filter from "./components/filter/filter";

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
        <div className="w-inner">
          <Filter/>
          <div className="w-center">
            <main className="container">
              <Posts
                posts={this.state.posts}
              />
            </main>
          </div>
        </div>
        <div className="w-footer">Footer</div>
      </React.Fragment>
    );
  }
}
 
export default App;
