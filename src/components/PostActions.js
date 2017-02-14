import React, {Component} from 'react';

export default class PostActions extends Component {
    constructor(props) {
        super(props);

        this.getCommentsButtonName = this.getCommentsButtonName.bind(this);
        this.getEditButtonName = this.getEditButtonName.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    getCommentsButtonName() {
        return this.props.commentsShown
            ? 'Hide comments'
            : 'Show comments';
    }

    getEditButtonName() {
        return this.props.editMode
            ? 'Cancel editing'
            : 'Edit';
    }

    handleDelete(e) {
        e.preventDefault();
        const {postId} = this.props;
        this.props.deletePost(postId)
    }

    render() {
        return (
            <div className="post-actions-container">
                <button className="button button-margin-right" onClick={this.props.toggleEditMode}>{this.getEditButtonName()}</button>
                <button className="button-danger" onClick={this.handleDelete}>Delete</button>
                <button className="button side-right" onClick={this.props.toggleComments}>{this.getCommentsButtonName()}</button>
            </div>
        )
    }
}
