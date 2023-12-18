import Character from './Character';
import { useCharacters } from '../services/useCharacters';

export default function Characters() {
  const { characters } = useCharacters();

  return (
    <>
      <ul className="grid grid-cols-auto-fill gap-8 p-4">
        {characters?.map((character) => (
          <li key={character._id}>
            <Character character={character} />
          </li>
        ))}
      </ul>
    </>
  );
}
