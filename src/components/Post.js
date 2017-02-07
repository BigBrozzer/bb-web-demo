import React, { Component } from 'react';

import PostActions from './PostActions';
import PostComments from './PostComments';
import PostDescription from './PostDescription';

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentsShown: false,
            editMode: false
        };

        this.toggleComments = this.toggleComments.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    toggleComments(e) {
        e.preventDefault();
        const {commentsShown} = this.state;

        if (!this.props.post.comments) {
            this.props.fetchComments(this.props.post.id);
        }
        this.setState({commentsShown: !commentsShown})
    }

    toggleEditMode() {
        this.setState((prevState) => ({editMode: !prevState.editMode}));
    }

    handleEdit(title, body) {
        this.props.editPost({...this.props.post, body, title});
        this.toggleEditMode();
    }

    render() {
        const {title, body, id} = this.props.post;
        const {commentsShown, editMode} = this.state;
        return (
            <div>
                <div style={{border: '1px solid', margin: '0px auto', padding: '5px'}}>
                    <PostDescription editMode={editMode}
                                     title={title}
                                     body={body}
                                     submitEdit={this.handleEdit}/>
                    <PostActions postId={id}
                                 editMode={editMode}
                                 commentsShown={commentsShown}
                                 toggleComments={this.toggleComments}
                                 deletePost={this.props.deletePost}
                                 toggleEditMode={this.toggleEditMode}/>
                </div>
                {commentsShown && <PostComments {...this.props.post}/>}
            </div>
        );
    }
}
