import React, { useState, useEffect } from "react";
import UserAlbums from "./UserAlbums";


export default function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState();
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => {
        console.log(error);
      });
  }, []);
function clickHandler(id, name){
  setName(name);
  setUserId(id);
}
  return (  
  <div style={{display:"flex", flexDirection:"row"}}>
      <div>
    <ul>
       {
         users.map((user) => 
          <li key={user.id}>Name: {user.name} 
         <div>Email: {user.email}</div>
         <div><button  type="button" onClick={() => clickHandler(user.id, user.name)}>View Albums</button></div><br/> </li>
     )}    
     </ul>
     </div>
      <div>
      <h1>{name}</h1>
           <UserAlbums  userId={userId} />
      </div>
  </div>
  );
}
