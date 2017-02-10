import React from 'react';

export default ({fetchingComments, error, comments}) => {
        if (error) {
            return <b>{error}</b>;
        }
        if (fetchingComments) {
            return <b>Loading...</b>;
        }
        return (
            <ul style={{color: 'blue'}}>
                {comments.map(({id, name, body}) => (
                    <li key={id} style={{border: '1px solid', margin: '5px auto', padding: '5px'}}>
                        <h3>{name}</h3>
                        <p>{body}</p>
                    </li>
                ))}
            </ul>
        );
}
