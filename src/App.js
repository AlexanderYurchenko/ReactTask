import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";
import Posts from "./components/posts/posts";
import Filter from "./components/filter/filter";
import PostSingle from "./components/post-single/post-single";

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
              <Router>
                <div>
                  <Route exact path="/" component={Posts} />
                  {/* <Route path="/search" component={Posts} /> */}
                  <Route path="/post" component={PostSingle} />


                  <Posts
                    posts={this.state.posts}
                  />
                </div>
              </Router>
            </main>
          </div>
        </div>
        <div className="w-footer">Footer</div>
      </React.Fragment>
    );
  }
}
 
export default App;
