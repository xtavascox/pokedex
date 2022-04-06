import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (search: string) => {
  const {data: { id, name, sprites }} = await pokeApi.get<Pokemon>(`/pokemon/${search}`);

  return {
    id,
    name,
    sprites,
  };
};
