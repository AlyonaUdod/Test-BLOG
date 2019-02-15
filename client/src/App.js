import React, { Component } from 'react'
import { connect} from 'react-redux'
import {requestPosts} from './redux/action/requestPostsAction'
import {createPost, putPost} from './redux/action/PostPutDeleteAction' 
import { Header, Dimmer, Loader, Segment, Item, Card, Button, Icon } from 'semantic-ui-react'
import Post from './Post/Post'
import './App.css'
import Modal from './Modal/Modal'


class App extends Component {

  state = { 
    modal: false,
    title: '',
    body: '',
    newPost: true,
    editPost: {},
  }

  componentDidMount() {
    this.props.getPosts()
  }

  toggleModal = () => {
    this.setState(prev => ({
      modal: !prev.modal,
      title: '',
      body: '',
      newPost: true,
      editPost: {},
    }))
  }

  handlerChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  createNewPost = (id) => {
    // console.log(this.state.editPost)
    if(!this.state.editPost._id) {
      let post = {
        title: this.state.title,
        body: this.state.body,
      }
     this.setState({
       modal: false, 
       title: '',
       body: '',
     })
      this.props.postPost(post)
    } else {
      let editedPost = {...this.state.editPost, title: this.state.title, body: this.state.body }
      this.props.editPost(editedPost._id, editedPost)
      this.setState({
        modal: false, 
        newPost: true,
        title: '',
        body: '',
        editPost: '',
      })
    }
  }

  editPost = (id) => {
    let editPost = this.props.posts.find(el => el._id === id)
    this.setState({
      title: editPost.title,
      body: editPost.body,
      editPost: editPost,
      modal: true,
      newPost: false,
    })
  }

  render() {
    const { modal, title, body, newPost, editPost } = this.state
    const {posts, error} = this.props
    
    return (
      <div className='wrapper'>
        <div className='main-title'> 
          <Header as='h2' icon='chat' content='Blog'/>
        </div>
        <Button icon labelPosition='right' onClick={this.toggleModal}>
          Create New Post
          <Icon name='world' />
        </Button>
        <div className='card-wrapper'>
        { posts === undefined && !error ? 
             <Segment style={{padding: '13.8rem 0'}}>
                  <Dimmer active inverted>
                      <Loader inverted> Loading ...</Loader>
                  </Dimmer>
              </Segment> : error ? <Item> {error} </Item> :
          <Card.Group>
          {error === '' ? posts.map(el => <Post key={el._id} title={el.title} body={el.body} id={el._id} editPost={this.editPost}/>) : 
          <div className='error'>{error}</div>}
          </Card.Group>
          }
        </div>
          {modal && <Modal modal={modal} toggleModal={this.toggleModal} editId={editPost._id} title={title} body={body} handlerChange={this.handlerChange} createNewPost={this.createNewPost} newPost={newPost}/>}
      </div>
        
    )
  }
}

function MSTP (state) {
  return {
      posts: state.posts,
      error: state.error,
      post: state.post,
  }
}

function MDTP (dispatch) {
  return {
      getPosts: function() {
        dispatch(requestPosts())
      },
      postPost: function(post) {
        dispatch(createPost(post))
      },
      editPost: function(id, post){
        dispatch(putPost(id, post))
      },
  }
}

export default connect( MSTP, MDTP)(App);
