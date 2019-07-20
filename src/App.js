import React, {Component} from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Posts from "./components/posts/posts";
import Filter from "./components/filter/filter";
import PostSingle from "./components/post-single/post-single";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      refreshPostsList: false,
      tags: [],
      refreshTagsList: false
    };
  }

  componentDidMount() {
    // let url = "http://localhost:3001/posts"
    let url = "https://raw.githubusercontent.com/AlexanderYurchenko/ReactTask/master/src/data/posts.json"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({posts: data.posts});
      })
      .then(this.refreshPostsList)

    let tagsUrl = "https://raw.githubusercontent.com/AlexanderYurchenko/ReactTask/master/src/data/tags.json"
    fetch(tagsUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({tags: data.tags});
      })
      .then(this.refreshTagsList)
  }

  refreshPostsList = () => this.setState({refreshPostsList: !this.state.refreshPostsList})

  handleFilter = () => {
    
  }

  render() { 
    return (  
      <React.Fragment>
        <div className="w-inner">
          <Filter onFilter={this.handleFilter}/>
          <div className="w-center">
            <main className="container">
              <Switch>
                <Route exact path="/"  children={(props) => (
                  props.match
                    ? <Posts {...props} posts={this.state.posts} refresh={this.state.refreshPostsList}/> : ''
                )}/>
                <Route path="/post/:postId"  children={(props) => (
                  props.match
                    ? <PostSingle {...props} refresh={this.state.refreshPost}/> : ''
                )}/>
                </Switch>
            </main>
          </div>
        </div>
        <div className="w-footer">Footer</div>
      </React.Fragment>
    );
  }
}
 
export default App;
