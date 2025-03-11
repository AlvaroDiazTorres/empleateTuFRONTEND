import React from 'react';

interface PersonajeProps {
  id: number;
  name: string;
  image: string;
  subclass: string;
  level: number;
  description: string;
}

export default function Personaje({
  id,
  name,
  image,
  subclass,
  level,
  description,
}: PersonajeProps) {
  return (
    <div className="w-full max-w-sm text-white mx-2.5 mb-4">
      <div className="text-base border-2 rounded-2xl px-4 py-4 border-green-400">
        <div className="flex flex-col items-center">
          <img
            className="max-h-40 max-w-40 rounded-full mb-3 select-none"
            draggable="false"
            src={image ? image : "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"}
            alt={`Imagen del personaje ${name}`}
          />
          <div className="text-center">
            <div className="font-bold text-lg">{name}</div>
            <div className="text-xs">{subclass} nivel {level}</div>
            <div className="mt-1 text-sm max-w-xs">{description}</div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-3">
          <a
            href={`/character/edit/${id}`}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-900 rounded-3xl"
          >
            ⚙️
          </a>
        
        </div>
      </div>
    </div>
  );
}
