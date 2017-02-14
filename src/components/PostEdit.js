import React, {Component} from 'react';

export default class PostEditForm extends Component {
    submitForm(e) {
        e.preventDefault();
        const {name, description} = this.refs;
        this.props.submitEdit(name.value, description.value);
    }

    render() {
        const {title, body} = this.props;
        return (
            <form className="post-edit-container" onSubmit={this.submitForm.bind(this)}>
                <label>
                    <h5>Post title</h5>
                    <input className="input"
                           ref="name"
                           defaultValue={title} required/>
                </label>
                <label>
                    <h5>Post text</h5>
                    <textarea className="input"
                              ref="description"
                              defaultValue={body}/>
                    </label>
                <button className="button-submit side-right"
                        type="submit">Submit</button>
            </form>
        )
    }
}
