import { useCharacters } from '../services/useCharacters';

export default function Navbar() {
  const { handleSearch } = useCharacters();

  return (
    <nav className="flex justify-between items-center p-4 text-gray-950">
      <h1 className="font-bold text-2xl md:text-4xl">Personajes</h1>
      <form className="w-48 md:w-72 flex">
        <input
          onChange={handleSearch}
          type="search"
          name="buscar"
          placeholder="Buscar personaje..."
          className="border rounded border-gray-600 px-4 py-2 w-full bg-transparent focus:outline-none"
        />
      </form>
    </nav>
  );
}
