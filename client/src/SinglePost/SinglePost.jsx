import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Divider, List, Form, Button, TextArea, Message, Header, Segment } from 'semantic-ui-react'
import {createComment} from '../redux/action/PostPutDeleteAction'
import { addCommentToPost } from '../redux/action/requestsSinglePostsAction'

class SinglePost extends Component {
    state = {
        text: '',
        author: '',
    }

    handlerChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            this.postComment(e);
        }
    }

    postComment = async(e) => {
        e.preventDefault()
        let comment = {
            author: this.state.author ? this.state.author : 'Anonymous',
            text: this.state.text,
        }
        let id = this.props.post._id
        await this.props.postComment(id, comment)
        this.setState({
            text: '',
            author: '',
        })
    }

  render() {
      const {post} = this.props
      const {text, author} = this.state

    return (
      <div className='wrapper'>
        <Message style={{width: '50%'}}>
            <Header as='h2' style={{textAlign: 'center', margin: '1.5rem'}}>{post.title}</Header>
            <p style={{margin: '1rem', fontSize: '1.1rem'}}>{post.body}</p>
           <Divider/>
           <Header as='h3' style={{textAlign: 'center', margin: '1.5rem'}}>Comments</Header>
           <Segment>
                <List divided relaxed>
                {post.comments && post.comments.length > 0 ? post.comments.map(el =>
                    <List.Item key={el._id+el.author+el.body}>
                        <List.Content>
                        <List.Header>{el.author}</List.Header>
                        {el.text}
                        </List.Content>
                    </List.Item>
                ) : <p style={{textAlign: 'center'}}> No comments yet.</p>}
                </List>
            </Segment>
           <Divider/>
               <Form onSubmit={this.postComment}>
                        <Form.Field >
                            <input placeholder='Anonymous' type='text' value={author} onChange={this.handlerChange} name='author'/>
                        </Form.Field>
                        <Form.Field>
                        <TextArea placeholder='Comment' type='text' value={text} onChange={this.handlerChange} name='text' onKeyDown={this.handleKeyDown} required/>
                    </Form.Field>
                    <Button positive type='submit'>Submit</Button>
                </Form>
        </Message>
      </div>
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
        postComment: function(id, obj) {
          dispatch(createComment(id, obj))
        },
        setComment: function(comment) {
            dispatch(addCommentToPost(comment))
        },
    }
}

export default connect(MSTP, MDTP)(SinglePost)