import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
      refreshTagsList: false,
      searchValue: false,
      filteredPosts: false,
      redirect: false
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

  refreshTagsList = () => this.setState({refreshTagsList: !this.state.refreshTagsList})

  handleFilter = (value) => {
    const formattedValue = value.toLowerCase();
    this.setState({ searchValue: formattedValue })
    const filteredPosts = this.state.posts.filter(function(post){
      let result = false;
      post.tags.forEach(function(tag){        
        if (tag.toLowerCase().search(formattedValue) !== -1) {
          result = true
        }
      })
      return result
    });

    this.setState({ filteredPosts, redirect: true })
  }

  render() { 
    const { posts, refreshPostsList, tags, refreshTagsList, refreshPost, filteredPosts, redirect, searchValue } = this.state;

    let redirectComp;
    if (redirect) {
      redirectComp = <Redirect to={ "/search/" + searchValue }/>;
    }

    return (  
      <React.Fragment>
        <div className="w-inner">
          <Filter 
            tags={tags}
            onFilter={this.handleFilter}
            refresh={refreshTagsList}
            placeholder="Search by tag"
            />
          <div className="w-center">
            <main className="container">
              {redirectComp}
              <Switch>
                <Route exact path="/" children={(props) => (
                  props.match
                    ? <Posts {...props} posts={posts} refresh={refreshPostsList}/> : ''
                )}/>
                <Route path="/post/:postId" children={(props) => (
                  props.match
                    ? <PostSingle {...props} refresh={refreshPost}/> : ''
                )}/>
                <Route path={ "/search/" + searchValue } children={(props) => (
                  props.match
                  ? <Posts {...props} posts={filteredPosts}/> : ''
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
