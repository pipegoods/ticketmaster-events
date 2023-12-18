import { type CharacterType } from '../types/character';
export default function Character(props: {
  character: CharacterType;
}) {
  const { character } = props;
  const { name, imageUrl } = character;

  return (
    <article className="flex flex-col bg-green-200 rounded-lg overflow-hidden shadow-lg">
      <header className="flex items-center px-4 py-2">
        <h3 className="font-bold text-gray-950">{name}</h3>
      </header>
      <figure className="h-48">
        <img
          src={
            imageUrl === undefined
              ? 'https://images.unsplash.com/photo-1675638719472-930d110edbba?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              : imageUrl
          }
          className="w-full h-full object-cover"
          alt=""
        />
      </figure>
    </article>
  );
}
