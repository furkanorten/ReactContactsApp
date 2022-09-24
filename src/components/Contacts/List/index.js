import {useState} from 'react'

function List({contacts}) {

  const [filter, setFilter] = useState("")
  
  const filteredContacts = contacts.filter((contact) => {
    return Object.keys(contact).some((key) =>
        contact[key].toString().toLowerCase().includes(filter.toLowerCase())
    )
  })

  return (
    <div>
        <input value={filter} placeholder='Filter contact' onChange={(e) => setFilter(e.target.value)}></input>
        <ul className="list">
            {
                filteredContacts.map((contact, i) => (
                    <li key={i}>
                      <span>{contact.name}</span>
                      <span>{contact.phone}</span>
                    </li>
                ))
            }
        </ul>
        <p>Total contacts ({filteredContacts.length})</p>
    </div>
  )
}

export default List