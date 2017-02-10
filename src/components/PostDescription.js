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
                <h2>{title}</h2>
                <article>{body}</article>
            </section>
        );
}
