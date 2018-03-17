import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionCreators from '../actions/posts';
import Post from '../components/Post';

class Blog extends Component {
    componentDidMount() {
        this.props.fetchPosts();
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
                            editPost={this.props.editPost}
                            deletePost={this.props.deletePost}
                            toggleEditMode={this.props.toggleEditMode}
                            toggleCommentsShown={this.props.toggleCommentsShown}
                            fetchComments={this.props.fetchComments}/>)
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts,
        postsFetching: state.posts.fetching,
        postsError: state.posts.error
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
