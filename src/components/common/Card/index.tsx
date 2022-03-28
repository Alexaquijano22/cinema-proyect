import { FC, useEffect } from "react"
import { Item } from "../../../types"
import { Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material"
import { Buttons } from '../index'
import { useInfoDB } from "../../../hooks"

type Props = {
    information: Item
}

const CardComponent: FC<Props> = ({ information }) => {

    const { addItemFb, deleteItemFb, isItemInFb } = useInfoDB()

    const addOrDeleteItem = (info: Item, action: string) => {
        if (action === "delete") {
            deleteItemFb(info.id)
        } else {
            addItemFb(info)
        }

    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={`https://image.tmdb.org/t/p/original/${information.poster_path}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {information.title}
                </Typography>
            </CardContent>
            <CardActions>
                {isItemInFb(information.id) === true ? (
                    <Buttons onClick={() => addOrDeleteItem(information, "delete")}>Eliminar</Buttons>

                ) : <Buttons onClick={() => addOrDeleteItem(information, "add")}>agregar</Buttons>}
            </CardActions>
        </Card>
    )
}

export { CardComponent }