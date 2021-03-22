import React, { useState, useEffect } from "react";
import UserAlbums from "./UserAlbums";



export default function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (  
  <div>
    <ul>
       {users.map((user) => 
          <li>{user.name}: <button>{user.email}</button></li>
     )}
    </ul>
  
    
    </div>
  );
}
