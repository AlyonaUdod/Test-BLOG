import React from 'react';
import {Modal, Form, Segment, Button} from 'semantic-ui-react'

const ModalPost = ({modal, toggleModal, title, body, handlerChange, createNewPost, newPost, editId}) => {
    return (
            <Modal open={modal}>
                <Modal.Header as='h2' style={{textAlign:'center'}}>
                      {newPost ? 'Add New Post' : 'Edit current post'}
                </Modal.Header>

                <Modal.Content>
                <Form size='big' onSubmit={createNewPost}>
                    <Segment>
                    <Form.Input 
                        fluid
                        name='title'
                        icon='list'
                        iconPosition='left'
                        placeholder="Post Title"
                        type='text'
                        onChange={handlerChange}
                        value={title}
                        required
                        />
                    <Form.TextArea
                        name='body'
                        placeholder="Add Text"
                        type='text'
                        onChange={handlerChange}
                        value={body}
                        required
                        />
                    </Segment>
                </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button positive size='large' onClick={!editId ? createNewPost : () => createNewPost(editId)}>{newPost ? 'Add Post' : 'Edit post'}</Button>
                    <Button negative color='purple' size='large' onClick={toggleModal}>Cansel</Button>
                </Modal.Actions>
            </Modal>
    );
};

export default ModalPost;

// 