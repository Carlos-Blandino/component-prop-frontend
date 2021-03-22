import React from 'react';

export default function UserAlbums({albums}){
    return(
      <ol>
          {albums.map((album, index) => {
               return <li>{album.title}</li>
          })}
      </ol>
      
    )
}