import React from 'react';
import { Link } from 'react-router-dom';

export default function Album({ id, title }) {
  return (
    <div className="max-w-72 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
      <Link to={`/albums/${id}/photos`}> 
        <img 
          className="w-full h-48 object-cover" 
          src="https://picsum.photos/200/300" 
          alt="Album" 
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </Link>
    </div>
  );
}
