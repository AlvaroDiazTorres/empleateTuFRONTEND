import { useEffect, useState } from 'react';
import Personaje from '../components/Personaje';
import CharacterService from '../services/character.services';
import { Character } from '../models/Character';

export default function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    CharacterService.getAll()
      .then((data) => {
        setCharacters(data); // Asegúrate de que `data` sea un array con los campos correctos.
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Error al cargar los personajes');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='flex flex-col'>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <Personaje
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            subclass={character.subclass}
            level={character.level}
            description={character.description || 'Sin descripción'}
          />
        ))}
      </div>
      <button
        type="button"
        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mt-10"
      >
        <a href="/character/new">Crear nuevo personaje</a>
      </button>
    </div>
  );
}
