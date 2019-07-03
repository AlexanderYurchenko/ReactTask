import React, {Component} from "react";
import "./App.css";
import Posts from "./components/posts";
import PostsData from "./data/posts.json";
import Filter from "./components/filter";

class App extends Component {
  state = {  
    
  }
  render() { 
    return (  
      <React.Fragment>
        <Filter/>
        <main className="container">
          <Posts
            posts={PostsData}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
