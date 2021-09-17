import React, { useState, useContext, useEffect} from 'react';
import './contactList.css';
import useSignUpForm from './userSignupFrom';
import {GlobalContext} from '../GlobalState';
import {Link, useHistory} from 'react-router-dom';







const  ContactList = () => {
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm();
    const { contacts, removeContact, addContactToGroupOne,addContactToGroupTwo} = useContext(GlobalContext);
    const [editBox, openEditFunction] = useState (false)
    const history = useHistory();

    useEffect(()=>{
      openEditFunction(true)
  },[editBox])

  const addContactToGroupOneCall = (d)=>{
    addContactToGroupOne(d)
    history.push('/friendCircle')
  }

  const addContactToGroupTwoCall = (d)=>{
    addContactToGroupTwo(d)
    history.push('/friendCircle')
  }
    return (
      <div className="ContactList">   
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="Name" onChange={handleInputChange} value={inputs.Name} required />&nbsp;
                <label>Contact Number</label>
                <input type="text" name="ContactNumber" onChange={handleInputChange} value={inputs.ContactNumber} required />
            </div>
            <button type="submit" >Create Contact</button>
        </form>
        <ul className="contactListDisplay">
          {
            contacts && contacts.length!==0 ? contacts.map( (d,i) =>
          <li key ={i}>
            <div className="contactMenuCard">
              <div className="contactName">{d.Name} <button className="GroupOne" onClick={()=>addContactToGroupOneCall(d)}>Group One</button> <button className="GroupOne"  onClick={()=>addContactToGroupTwoCall(d)}>Group TWO</button></div>
              <div className="contactNumber">{d.ContactNumber}   <span className="EditContact" onClick={openEditFunction}> Edit </span> <div className="DeleteContact" onClick={()=>removeContact(d.ContactNumber)}> Delete </div></div>
            </div>
          </li> ) :null
          } 

        </ul>
        {editBox ? 
          <div>

          </div> : null }      
      </div>
    );
  }
  
  export default ContactList;