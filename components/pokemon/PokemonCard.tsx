import { Card, Grid, Row, Text } from '@nextui-org/react';

import { FC } from "react"

import { SmallPokemon } from "../../interfaces"
import { useRouter } from 'next/router';
interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon: { name, img, id } }) => {

    const router = useRouter()

    const onPokemonClick = () => {
        router.push(`/name/${name}`)
    }
    return (
        <>
            <Grid xs={6} sm={3} md={2} xl={1} key={name} >
                <Card hoverable clickable onClick={onPokemonClick}>
                    <Card.Body css={{ p: 1 }}>
                        <Card.Image src={img} alt={name} width='100%' height='100%' />
                    </Card.Body>
                    <Card.Footer>
                        <Row justify='space-between'>
                            <Text h3 transform='capitalize' >{name}</Text>
                            <Text h4>#{id}</Text>
                        </Row>
                    </Card.Footer>
                </Card>


            </Grid>

        </>
    )
}
