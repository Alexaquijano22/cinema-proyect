import { FC, useContext, useEffect } from "react"
import { Item } from "../../../types"
import { Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material"
import { Buttons } from '../index'
import { useInfoDB } from "../../../hooks"
import { AuthContext } from "../../../context/Auth"
import { useNavigate } from "react-router-dom"

type Props = {
    information: Item
}

const CardComponent: FC<Props> = ({ information }) => {

    
    const { state, dispatch } = useContext(AuthContext);

    const { addItemFb, deleteItemFb, isItemInFb, isItemViewed, addToItemsViewed, deleteToItemsViewed } = useInfoDB()

    const history = useNavigate()

    const addOrDeleteItem = (info: Item, action: string) => {
        if (action === "delete") {
            deleteItemFb(info.id)
        } else {
            addItemFb(info)
        }

    }

    const changeStateItem = (info: Item, action: string) => {
        //Recordar agregar el id del usuario en la base de datos
        if (action === "add") {
            addToItemsViewed(state.userLogged?.idDB, info.id);
        } else {
            deleteToItemsViewed(state.userLogged?.idDB, info.id);
        }
    }   

    return (
        <Card sx={{ maxWidth: 345 }} onClick={() => history(`/detail/${information.idDB}`)}>
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
                {state.userLogged.rol !== "user" ? (
                    isItemInFb(information.id) === true ? (
                        <Buttons onClick={() => addOrDeleteItem(information, "delete")}>Eliminar</Buttons>

                    ) : <Buttons onClick={() => addOrDeleteItem(information, "add")}>Agregar</Buttons>
                ) : (
                    isItemViewed(`${information.id}`) === true ? (
                        <Buttons onClick={() => changeStateItem(information, "delete")}>Visto</Buttons>

                    ) : <Buttons onClick={() => changeStateItem(information, "add")}>No visto</Buttons>
                )}
            </CardActions>
        </Card>
    )
}

export { CardComponent }