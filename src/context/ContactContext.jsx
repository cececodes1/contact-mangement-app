import React, { createContext, useState } from 'react';

// a context
export const ContactContext = createContext();

// a provider component
export const ContactProvider = ({ children }) => {
    const [contacts] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '555-555-5555' },
    ]);
    const [selectedContact, setSelectedContact] = useState(null);

    return (
        <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
            {children}
        </ContactContext.Provider>
    );
};