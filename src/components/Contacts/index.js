import { useState } from 'react'
import List from './List'
import Form from './Form'
import './styles.css'

function Contacts() {

  let localContacts = JSON.parse(localStorage.getItem('contacts'))
  if(localContacts === null) {
    localContacts = []
    localStorage.setItem('contacts', JSON.stringify(localContacts))
  }

  const [contacts, setContacts]= useState(localContacts)


  return (
    <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts