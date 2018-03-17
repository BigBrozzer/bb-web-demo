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
        const { post } = this.props;

        if (!post.comments) {
            this.props.fetchComments(post.id);
        }
        this.props.toggleCommentsShown(post);
    }

    toggleEditMode() {
        this.props.toggleEditMode(this.props.post);
    }

    handleEdit(title, body) {
        this.props.editPost({...this.props.post, body, title});
        this.toggleEditMode();
    }

    render() {
        const {title, body, id, isCommentsShown, isEditMode } = this.props.post;
        return (
            <div>
                <div className="post">
                    <PostDescription editMode={isEditMode}
                                     title={title}
                                     body={body}
                                     submitEdit={this.handleEdit}/>
                    <PostActions postId={id}
                                 editMode={isEditMode}
                                 commentsShown={isCommentsShown}
                                 toggleComments={this.toggleComments}
                                 deletePost={this.props.deletePost}
                                 toggleEditMode={this.toggleEditMode}/>
                </div>
                {isCommentsShown && <PostComments {...this.props.post}/>}
            </div>
        );
    }
}
