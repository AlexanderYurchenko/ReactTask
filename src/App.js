import React, {Component} from "react";
import "./App.css";
import Posts from "./components/posts";
// import PostsData from "./data/posts.json";
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
        console.log(data);
        let posts = data.map((post, index) => {
          return (
            <div key={index}>
              <h3>{post.title}</h3>
              <p>{post.info}</p>
            </div>
          )
        })
        this.setState({posts: posts});
      })
  }

  render() { 
    return (  
      <React.Fragment>
        <Filter/>
        <main className="container">
          {this.state.posts}
          {/* <Posts
            posts={PostsData}
          /> */}
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
