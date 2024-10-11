import React from 'react';

export default function Album({title}) {
  return (
    <div className="max-w-72 bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        className="w-full h-48 object-cover" 
        src="https://picsum.photos/200/300" 
        alt="Album" 
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}