import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { FC, useState } from 'react';
import { Pokemon } from '../../interfaces';
import { localFavorites } from '../../utils';


interface Props {
    pokemon: Pokemon
}

export const PokemonDisplay: FC<Props> = ({ pokemon }) => {
    const [isInFavorites, setIsInFavorites] = useState(localFavorites.existFavorites(pokemon.id))
    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id)
        setIsInFavorites(!isInFavorites);
        if (isInFavorites) return
        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 0.5,
                y: 0
            }
        })
    }
    return (
        <Grid.Container css={{ marginTop: '5px' }} gap={2}>
            <Grid xs={12} sm={4} >
                <Card hoverable css={{ padding: '30px' }}>
                    <Card.Body>
                        <Card.Image src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                            alt={pokemon.name}
                            width='100%'
                            height={200}
                        />
                    </Card.Body>

                </Card>
            </Grid>
            <Grid xs={12} sm={8} >
                <Card>
                    <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }} >
                        <Text h1 transform='capitalize'>{pokemon.name}</Text>
                        <Button
                            color='gradient'
                            ghost={!isInFavorites}
                            onClick={onToggleFavorite}
                        >
                            {isInFavorites ? 'Eliminar de favoritos' : 'Guardar en favoritos'}
                        </Button>
                    </Card.Header>
                    <Card.Body>
                        <Text size={30}>Sprites:</Text>
                        <Container display='flex' direction='row'>
                            <Image
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.back_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.front_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.back_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                        </Container>
                    </Card.Body>
                </Card>
            </Grid>

        </Grid.Container>
    )
}
