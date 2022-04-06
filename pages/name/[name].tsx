import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Layout } from '../../components/layouts';
import { pokeApi } from "../../api"
import { Pokemon } from '../../interfaces';
import { PokemonDisplay } from '../../components/pokemon';
import { PokemonName } from "../../interfaces"
import { getPokemonInfo } from '../../utils';

interface Props {
    pokemon: Pokemon
}


const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

    return (
        <Layout title={pokemon.name}>
            <PokemonDisplay pokemon={pokemon} />
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data: { results } } = await pokeApi.get<PokemonName>('/pokemon?limit=151')
    return {
        paths: results.map(({ name }) => ({ params: { name } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string }
    return {
        props: {
            pokemon: await getPokemonInfo(name)
        }
    }
}



export default PokemonByNamePage 