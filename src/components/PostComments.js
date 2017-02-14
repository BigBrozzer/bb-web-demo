import React from 'react';

export default ({fetchingComments, error, comments}) => {
        if (error) {
            return <b>{error}</b>;
        }
        if (fetchingComments) {
            return <div className="loader"></div>;
        }
        return (
            <ul className="commentList">
                {comments.map(({id, name, body}) => (
                    <li className="comment" key={id}>
                        <h3 className="comment-title">{name}</h3>
                        <p className="comment-text">{body}</p>
                    </li>
                ))}
            </ul>
        );
}
