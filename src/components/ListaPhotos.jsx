import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardPhoto from './CardPhoto';

export default function ListaPhotos() {
  const { albumId } = useParams(); // Obtenemos el albumId desde la URL
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch solo las fotos del álbum correspondiente
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error('Error fetching photos:', error));
  }, [albumId]);

  return (
    <div className='flex justify-center p-10'>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {photos.map(photo => (
          <CardPhoto key={photo.id} title={photo.title} url={photo.url} />
        ))}
      </ul>
    </div>
  );
}
