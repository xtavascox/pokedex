import { Grid, Card } from '@nextui-org/react'
import { FC } from 'react'
import { FavoriteCardPokemmons } from './FavoriteCardPokemmons'

interface Props {
    pokemonList: number[]
}


export const FavoritePokemons: FC<Props> = ({ pokemonList }) => {
    return (
        <>
            <Grid.Container gap={2} direction='row' justify='flex-start'  >
                {
                    pokemonList.map(id => (
                        <FavoriteCardPokemmons key={id} id={id} />
                    ))
                }
            </Grid.Container>

        </>
    )
}
