import {useState, useEffect} from 'react'

const initialFormValues = {name: '', phone: ''}

function Form({addContact, contacts}) {
  
  const [form, setForm] = useState(initialFormValues)

  useEffect(() => {
    setForm(initialFormValues)
  }, [contacts])

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(form.name === '' || form.phone === '') {
        return false
    }
    addContact([...contacts, form])
    const localContacts = JSON.parse(localStorage.getItem('contacts'))
    localContacts.push(form)
    localStorage.setItem('contacts', JSON.stringify(localContacts))
  }

  return (
    <form onSubmit={onSubmit}>
        <div>
            <input value={form.name} name="name" placeholder='Name' onChange={onChangeInput}/>
        </div>
        <div>
            <input value={form.phone} name="phone" placeholder='Phone Number' onChange={onChangeInput}/>
        </div>
        <div className='btn'>
            <button>Add</button>
        </div>
    </form>
  )
}

export default Form