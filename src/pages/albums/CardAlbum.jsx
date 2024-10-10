import React from 'react';

export default function CardAlbum() {
  return (
    <div className="max-w-52 bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        className="w-full h-48 object-cover" 
        src="" 
        alt="Album" 
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Album Title</h3>
      </div>
    </div>
  );
}
