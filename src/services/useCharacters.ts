import { useEffect, useState } from 'react';
import { CharacterType } from '../types/character';
import { useDebouncedCallback } from 'use-debounce';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<CharacterType[]>();
  const [search, setSearch] = useState('');

  const getCharacters = async () => {
    const response = await fetch(
      'https://api.disneyapi.dev/character'
    );
    const data = await response.json();

    setCharacters(data.data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const filterCharacters = useDebouncedCallback((search: string) => {
    const filteredCharacters = characters?.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );

    console.log(filteredCharacters);

    setCharacters(filteredCharacters);

    return filteredCharacters;
  }, 500);

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(event.target.value);
    filterCharacters(search);
  };

  return {
    characters,
    getCharacters,
    filterCharacters,
    handleSearch,
  };
};
