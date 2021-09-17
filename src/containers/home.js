import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'

const  Home = () => {
    return (
      <div className="Home">
          <ul id="menu">
              <Link to="/"><li>Home</li></Link>
              <Link to="/contactList"><li>Contact List</li></Link>
              <Link to="/friendCircle"><li>Friend Circle</li></Link>
          </ul>
      </div>
    );
  }
  
  export default Home;