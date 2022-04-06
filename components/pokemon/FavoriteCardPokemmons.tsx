import { Grid, Card } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props {
    id: number
}

export const FavoriteCardPokemmons: FC<Props> = ({ id }) => {
    const router =useRouter()

    const onFavoriteClicked=(id:number)=>{
            router.push(`/pokemon/${id}`);
    }
    
    
    
    return (
        <>
            <Grid key={id} xs={6} sm={3} md={2} xl={1} onClick={()=>onFavoriteClicked(id)} >
                <Card hoverable clickable css={{
                    padding: 10
                }}>
                    <Card.Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={'100%'}
                        height={140}
                    />

                </Card>
            </Grid>
        </>
    )
}
