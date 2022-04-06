import { useState, useEffect } from 'react';

import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui"
import { localFavorites } from '../../utils'
import { FavoritePokemons } from '../../components/pokemon';


const Favorites = () => {

  const [pokemonList, setPokemonList] = useState<number[]>([])

  useEffect(() => {
    setPokemonList(localFavorites.pokemons())
  }, [])

  return (
    <>
      <Layout title="Favoritos">
        {
          pokemonList.length > 0
            ? (<FavoritePokemons pokemonList={pokemonList} />)
            : (<NoFavorites />)
        }
      </Layout>
    </>
  )
}

export default Favorites