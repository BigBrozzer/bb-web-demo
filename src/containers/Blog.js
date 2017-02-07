import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionCreators from '../actions/posts';
import Post from '../components/Post';

class Blog extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    handleDelete(id) {
        this.props.deletePost(id);
    }

    handleEdit(editedPost) {
        this.props.editPost(editedPost);
    }

    render() {
        return (
            <div className="main">
                <h1 className={this.props.postsFetching ? 'loader': ''}>My Awesome Blog</h1>
                {this.props.postsError
                    ? this.props.postsError
                    : this.props.posts.map((post) =>
                        <Post key={post.id}
                            post={post}
                            editPost={this.handleEdit}
                            deletePost={this.handleDelete}
                            fetchComments={this.props.fetchComments.bind(null)}/>)
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts,
        postsFetching: state.posts.fetching,
        postsError: state.posts.error,
        modals: state.modals
    }
}

function mapDispachToProps(dispach) {
    return bindActionCreators(actionCreators, dispach);
}

export default connect(mapStateToProps, mapDispachToProps)(Blog)
