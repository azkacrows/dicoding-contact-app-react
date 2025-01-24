import React from 'react';

class ContactInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            tag: '',
        };

        this.onEventNameChangeHandler = this.onEventNameChangeHandler.bind(this);
        this.onEventTagChangeHandler = this.onEventTagChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(e) {
        e.preventDefault();
        // eslint-disable-next-line react/prop-types
        this.props.addContact(this.state);
    }

    onEventNameChangeHandler(e) {
        this.setState({
            name: e.target.value,
        });
    }

    onEventTagChangeHandler(e) {
        this.setState({
            tag: e.target.value,
        });
    }

    render() {
        return (
            <form className="contact-input" onSubmit={this.onSubmitHandler}>
                <input
                    type="text"
                    placeholder="nama"
                    value={this.state.name}
                    onChange={this.onEventNameChangeHandler}
                />
                <input
                    type="text"
                    placeholder="tag"
                    value={this.state.tag}
                    onChange={this.onEventTagChangeHandler}
                />
                <button type="submit">Tambah</button>
            </form>
        );
    }
}

export default ContactInput;
