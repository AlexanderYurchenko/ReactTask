import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.scss";
import Posts from "./components/posts/posts";
import Filter from "./components/filter/filter";
import PostSingle from "./components/post-single/post-single";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      refreshPostsList: false
    };
  }

  componentDidMount() {
    let url = "http://localhost:3001/posts"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({posts: data});
      })
      .then(this.refreshPostsList)
  }

  refreshPostsList = () => this.setState({refreshPostsList: !this.state.refreshPostsList})

  render() { 
    return (  
      <React.Fragment>
        <div className="w-inner">
          <Filter/>
          <div className="w-center">
            <main className="container">
              <Switch>
                {/* <Route exact path="/" component={Posts} /> */}
                {/* <Route exact path="/" 
                  render={(props) => <Posts posts={this.state.posts} {...props}/>}
                /> */}
                <Route exact path="/"  children={(props) => (
                  props.match
                    ? <Posts {...props} posts={this.state.posts} refresh={this.state.refreshPostsList}/> : ''
                )}/>
                {/* <Route path="/search" component={Posts} /> */}
                <Route path="/post/:postId"  children={(props) => (
                  props.match
                    ? <PostSingle {...props} refresh={this.state.refreshPost}/> : ''
                )}/>
                {/* <Route path="/post/:postId" component={PostSingle} /> */}

                {/* {routes.map(({ path, component, fetchInitialData}) => {
                  <Route
                    path={path}
                    render={(props) => <component {...props} fetchInitialData={fetchInitialData}/>}
                  />
                })} */}


                {/* <Posts
                  posts={this.state.posts}
                /> */}
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
