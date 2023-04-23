import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  // const contacts = [
  //   {
  //     id: "1",
  //     "name": "Aditya Mahamuni",
  //     "email": "adimahamuni25@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     "name": "Bharati Mahamuni",
  //     "email": "bharatimahamuni@gmail.com"
  //   },
  //   {
  //     id: "3",
  //     "name": "Rajendra Mahamuni",
  //     "email": "rajendramahamuni71@gmail.com"
  //   },
  // ];

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact])
  }

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
