import React, {Component} from 'react';

import PostEditForm from './PostEdit';

export default class PostDescription extends Component {
    render() {
        const {title, body, editMode, submitEdit} = this.props;
        return editMode
            ? <PostEditForm title={title}
                            body={body}
                            submitEdit={submitEdit}/>
            : (
                <section>
                    <h2>{title}</h2>
                    <article>{body}</article>
                </section>
            );
    }
}
