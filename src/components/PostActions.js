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
            <div style={{position: 'relative'}}>
                <button style={{marginRight: '5px'}} onClick={this.props.toggleEditMode}>{this.getEditButtonName()}</button>
                <button onClick={this.handleDelete}>Delete</button>
                <button style={{position: 'absolute', bottom: '0', right: '0'}} onClick={this.props.toggleComments}>{this.getCommentsButtonName()}</button>
            </div>
        )
    }
}
