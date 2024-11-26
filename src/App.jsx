import React from 'react';
import { ContactProvider } from './context/ContactContext';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

const App = () => {
    return (
        <ContactProvider>
            <div>
                <h1>Contact Management App</h1>
                <ContactList />
                <ContactDetails />
            </div>
        </ContactProvider>
    );
};

export default App;
