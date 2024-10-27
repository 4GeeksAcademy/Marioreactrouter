import React from "react";

export const CardContact = ({ contact }) => {

    return (
        <div>
            <h2>Name: {contact.name}</h2>
            <p>Email: {contact.email}</p>
        </div>
    );
};
