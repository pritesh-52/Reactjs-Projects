import './App.css';
import React, { useState } from 'react';
import Header from "./Header";
import Addcontact from "./Addcontact";
import Contactlist from "./Contactlist";


function App() {

  const [contacts,setcontacts]=useState([]);
  const addContactHandler=(contact)=>{
    setcontacts([...contacts,contact]);
  }
  
  
  return (
    
         <div className="ui container">
          <Header></Header>
          <Addcontact addContactHandler={addContactHandler}></Addcontact>
          <Contactlist contacts={contacts}></Contactlist>
          
          
         </div>
  );
}

export default App;
