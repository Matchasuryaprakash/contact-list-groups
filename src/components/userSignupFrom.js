import React, { useState,useContext } from 'react';
import {GlobalContext} from '../GlobalState';


const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const {contacts} = useContext(GlobalContext)   
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
      }
      let contactNumbers = contacts.map(d => d.ContactNumber)
      if(inputs.ContactNumber && contactNumbers.includes(inputs.ContactNumber)){
        return
      }     
      contacts.push(inputs)
      setInputs(inputs => ({...inputs, [event.target.name]: ''}));
    }
    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs
    };
  }

  export default useSignUpForm;