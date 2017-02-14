import React from 'react';

import PostEditForm from './PostEdit';

export default (props) => {
    const {title, body, editMode, submitEdit} = props;
    return editMode
        ? <PostEditForm title={title}
                        body={body}
                        submitEdit={submitEdit}/>
        : (
            <section>
                <h2 className="post-title">{title}</h2>
                <article className="post-text">{body}</article>
            </section>
        );
}
