import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Card, Icon, Comment } from 'semantic-ui-react'
import { requestSinglePost } from '../redux/action/requestsSinglePostsAction'
import { removePost, } from '../redux/action/PostPutDeleteAction'
import {withRouter} from 'react-router-dom'

class Post extends Component {

  showPostPage = async(id)=>{
    await this.props.getPost(id)
    this.props.history.push('/post')
  }
  render() {
    const {title, body, id, deletePost, editPost} = this.props
    return (
      <Card className='card'>
      <Comment style={{ margin: '1rem', display: 'flex', justifyContent: 'flex-end'}}>
        <Comment.Actions>
            <Comment.Action onClick={() => editPost(id)} style={{color: 'grey', padding: '.4rem', margin: '.3rem'}}> 
                <Icon name='edit' onClick={() => editPost(id)}/> Edit
            </Comment.Action>
            <Comment.Action style={{color: 'grey', padding: '.4rem', margin: '.3rem'}}> 
                <Icon name='delete' onClick={() => deletePost(id)}/>
            </Comment.Action>         
        </Comment.Actions>
    </Comment>
    <Card.Content header={title} style={{textAlign: 'center'}}/>
    <Card.Content description={body} />
    <Card.Content extra onClick={() => this.showPostPage(id)}>
      <Icon name='pencil' />
      Show Comments
    </Card.Content>
  </Card>
    )
  }
}

function MSTP (state) {
  return {
      error: state.error,
      post: state.post,
  }
}

function MDTP (dispatch) {
  return {
      getPost: function(id) {
        dispatch(requestSinglePost(id))
      },
      deletePost: function(id) {
        dispatch(removePost(id))
      },
  }
}

export default withRouter(connect(MSTP, MDTP)(Post))