import './App.css';
import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const contacts = [
    {
      id: "1",
      "name": "Aditya Mahamuni",
      "email": "adimahamuni25@gmail.com"
    },
    {
      id: "2",
      "name": "Bharati Mahamuni",
      "email": "bharatimahamuni@gmail.com"
    },
    {
      id: "3",
      "name": "Rajendra Mahamuni",
      "email": "rajendramahamuni71@gmail.com"
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={ contacts }/> 
    </div>
  );
}

export default App;
