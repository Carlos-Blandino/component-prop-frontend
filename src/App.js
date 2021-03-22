import React, { useState, useEffect } from "react";
import UserAlbums from "./UserAlbums";



export default function App() {
  const [users, setUsers] = useState([]);
  const [currentId, setCurrentId] = useState();
  const [albums, setAlbums] = useState([]);

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => {
        console.log(error);
      });
  }, []);


  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${currentId}`)
        .then((response) => response.json())
        .then(setAlbums)
        .catch((error) => {
          console.log(error);
        });
    }, [currentId]);

   
  return (  
  <div>
      <div>
    <ul>
       {
         users.map((user) => 
          <li key={user.id}>{user.name}: <button type="button" onClick={() => setCurrentId(user.id)}>{user.email}</button></li>
     )}
    </ul>
  </div>
  <div>
    <UserAlbums  albums={albums} />
  </div>

  </div>
  );
}
