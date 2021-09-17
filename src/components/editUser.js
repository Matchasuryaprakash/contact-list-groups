import React, { useState, useContext, useEffect } from 'react'
import {GlobalContext} from '../GlobalState';
import {Link, useHistory} from 'react-router-dom';



export const EditContact =(props)=>{
    const [ selectedContact, setSelectedContact] = useState({
        Name:'',
        ContactNumber:''
    })
    const { contacts, editContact } = useContext(GlobalContext)
    const history = useHistory();
    const currentContactNumber = props.match.params.ContactNumber

    useEffect(()=>{
        const contactNumber = currentContactNumber
        const selectedContact = contacts.find( c  => c.ContactNumber === contactNumber)
        setSelectedContact(selectedContact)
    },[currentContactNumber, contacts])

    const onSubmit = ()=>{
        editContact(selectedContact)
        history.push('/')

    }
    const onChange = (e)=>{
        setSelectedContact({...selectedContact, [e.target.Name]:e.target.value})

    }

    return (
        <div className="EditUser">
          <div>
              <label>Edit Name</label>
              <input type="text" name="name"  value={selectedContact.Name} onChange={onChange} required />&nbsp;
              <Link to="/">Cancel</Link>
              
          </div>
        </div>
      );
}

  
  export default EditContact;
