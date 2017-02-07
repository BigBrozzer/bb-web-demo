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
            <form onSubmit={this.submitForm.bind(this)}>
                <input type="text"
                       style={{display: 'block'}}
                       ref="name"
                       defaultValue={title} required/>
                <input type="textarea"
                       style={{display: 'inline-block'}}
                       ref="description"
                       defaultValue={body}/>
                <button type="submit"
                        style={{display: 'inline-block'}}>Submit</button>
            </form>
        )
    }
}
