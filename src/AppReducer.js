const AppReducer =  (state, action) =>{
    console.log(action)
    switch(action.type){
    
        case 'REMOVE_CONTACT':
            return {
                contacts: state.contacts.filter( c =>{
                    return c.ContactNumber !== action.payload
                })
            }
        case 'EDIT_CONTACT':
            const updateContact = action.payload;
            const updateContacts = state.contacts.map( c => {
                if(c.ContactNumber === updateContact.ContactNumber){
                    return updateContacts;
                }
                return c
            })
            return{
                contacts: updateContacts
            }

        case 'ADD_CONTACT_GROUPONE':
            return {
                groupOneContacts:[action.payload, state.groupOneContacts]

            }

        case 'ADD_CONTACT_GROUPTWO':
            return {
                groupTwoContacts:[action.payload, state.groupTwoContacts]
    
            }

        default:
            return state
    }
}

export default AppReducer