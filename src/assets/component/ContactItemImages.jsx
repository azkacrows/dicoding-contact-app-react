/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function ContactItemImages({ imageUrl }) {
    return (
        <div className="contact-item__image">
            <img src={imageUrl} alt="contact avatar" />
        </div>
    );
}

export default ContactItemImages;
