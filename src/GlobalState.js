import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const intialState = {
    contacts: [
        {Name: "SampleNameOne", ContactNumber: "0000000000"},
        {Name: "SampleNameTwo", ContactNumber: "1111111111"}
    ],
    groupOneContacts: [
        {Name: "SampleNameOne", ContactNumber: "0000000000"},
    ],
    groupTwoContacts: [
        {Name: "SampleNameTwo", ContactNumber: "1111111111"}
        
    ]

}

export const GlobalContext = createContext(intialState);

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, intialState)

    const removeContact = (contactNumber) =>{
        dispatch({
            type: 'REMOVE_CONTACT',
            payload: contactNumber
        })
    }

    const editContact =( contact) =>{
        dispatch({
            type: 'EDIT_CONTACT',
            payload: contact
        })
    }

    const addContactToGroupOne = (contact) =>{
        dispatch({
            type: 'ADD_CONTACT_GROUPONE',
            payload: contact
        })
    }
    const addContactToGroupTwo = (contact) =>{
        dispatch({
            type: 'ADD_CONTACT_GROUPTwo',
            payload: contact
        })
    }

    return (
        <GlobalContext.Provider value={{ 
            contacts: state.contacts,
            groupOneContacts: state.groupOneContacts,
            groupTwoContacts: state.groupTwoContacts,
            removeContact,
            editContact,
            addContactToGroupOne,
            addContactToGroupTwo }}>
            {children}
        </GlobalContext.Provider>
    )
}