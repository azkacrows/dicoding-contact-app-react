/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ContactItemImages from './ContactItemImages';
import ContactItemBody from './ContactItemBody';
import DeleteButton from './DeleteButton';

function ContactItem({ imageUrl, name, tag, id, onDelete }) {
    return (
        <div className="contact-item">
            <ContactItemImages imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

export default ContactItem;
