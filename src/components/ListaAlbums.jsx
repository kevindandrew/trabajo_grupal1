
import React, { useEffect, useState } from 'react';
import Album from './Album';

export default function ListaAlbums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => console.error('Error fetching albums:', error));
  }, []);

  return (
    <div className='flex justify-center'>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {albums.map(album => (
        <Album key={album.id} title={album.title} />
      ))}
    </ul>
    </div>
    
  );
}
