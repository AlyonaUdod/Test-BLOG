import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import App from '../App.js'
import SinglePost from '../SinglePost/SinglePost'
import {connect} from 'react-redux'

 class Root extends Component {

  componentDidMount() {
    if(!this.props.posts.length > 0 && !this.props.post._id) {
      this.props.history.push('/')
    }
  }

  render() {
    return ( 
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/post' component={SinglePost}/>
        </Switch>
    )
  }
}

function MSTP (state) {
  return {
      posts: state.posts,
      post: state.post,
  }
}

export default withRouter(connect(MSTP, null) (Root))