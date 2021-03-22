import React, { useState, useEffect } from "react";
import UserAlbums from "./UserAlbums";



export default function App() {
  const [users, setUsers] = useState([]);
  const [click, setClick] = useState(false);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleClick(e){
    setClick(!click)
   const id =  e.target.parentNode.getAttribute("id")

  }
  return (  
  <div>
    <ul>
       {
         users.map((user ,index) => 
          <li key={index} id={user.id}>{user.name}: <button onClick={handleClick}>{user.email}</button> <UserAlbums userId={user.id}/></li>
         
     )}
    
    </ul>
  
    
    </div>
  );
}
