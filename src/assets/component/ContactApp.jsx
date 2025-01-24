import React from 'react';
import ContactList from '../component/ContactList';
import { getData } from '../utils/data';
import ContactInput from '../component/ContactInput';

class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: getData(),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }

    onDeleteHandler(id) {
        const contacts = this.state.contacts.filter((contact) => contact.id !== id);
        this.setState({ contacts });
    }

    onAddContactHandler({ name, tag }) {
        this.setState((prevState) => ({
            contacts: [
                ...prevState.contacts,
                {
                    id: +new Date(),
                    name,
                    tag,
                    imageUrl: '/images/default.png',
                },
            ],
        }));
    }

    render() {
        return (
            <div className="contact-app">
                <h1>Aplikasi Contact</h1>
                <h2>Tambah Contact</h2>
                <ContactInput addContact={this.onAddContactHandler} />
                <h2>Daftar Contact</h2>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}

export default ContactApp;
