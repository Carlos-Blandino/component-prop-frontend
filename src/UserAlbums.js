import React, {useState, useEffect} from 'react';


export default function UserAlbums({userId}){
const [albums, setAlbums] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
          .then((response) => response.json())
          .then(setAlbums)
          .catch((error) => {
            console.log(error);
          });
      }, [userId]);
    return(
      <ol>
          {albums.map((album, index) => {
               return <li>{album.title}</li>
          })}
      </ol>
      
    )
}