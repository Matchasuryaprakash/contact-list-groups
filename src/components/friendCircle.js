import React, {useContext} from 'react';
import {GlobalContext} from '../GlobalState';

const  FriendCircle = () => {

  const { groupOneContacts,groupTwoContacts } = useContext(GlobalContext)
    return (
      <div className="contactMenuCard">
        <div className="contactName">
          Contacts To Group One
          {groupOneContacts.map((contact,i) => 
          <li key={i}>{contact.Name}</li>
          )}      
        </div>
        
        <div className="contactNumber">Contacts To Group Two
        {groupTwoContacts.map((contact,i) => 
          <li key={i}>{contact.Name}</li>
          )} 
        </div>
      </div>
    );
  }
  
  export default FriendCircle;