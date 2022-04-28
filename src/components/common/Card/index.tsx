import { FC, useContext } from "react";
import { Item } from "../../../types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
  Grid,
  Rating,
} from "@mui/material";
import { Buttons, CardLogin } from "../index";
import { useInfoDB } from "../../../hooks";
import { AuthContext } from "../../../context/Auth";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

type Props = {
  information: Item;
};

const CardComponent: FC<Props> = ({ information }) => {
  const { state, dispatch } = useContext(AuthContext);

  const {
    addItemFb,
    deleteItemFb,
    isItemInFb,
    isItemViewed,
    addToItemsViewed,
    deleteToItemsViewed,
  } = useInfoDB();

  const history = useNavigate();

  const addOrDeleteItem = (info: Item, action: string) => {
    if (action === "delete") {
      deleteItemFb(info.id);
    } else {
      addItemFb(info);
    }
  };

  const changeStateItem = (info: Item, action: string) => {
    //Recordar agregar el id del usuario en la base de datos
    if (action === "add") {
      addToItemsViewed(state.userLogged?.idDB, info.id);
    } else {
      deleteToItemsViewed(state.userLogged?.idDB, info.id);
    }
  };

  const loadDetail = (id: string | undefined) => {
    if (id) {
      history(`/detail/${information.idDB}`);
    } else {
      history(`/detail/${information.id}`);
    }
  };

  return (
    <Card sx={{ position: "relative" }}>
      <CardMedia
        onClick={() => loadDetail(information.idDB)}
        sx={{ position: "relative" }}
        component="img"
        alt="green iguana"
        height="450"
        width="500"
        image={`https://image.tmdb.org/t/p/original/${information.poster_path}`}
      />

      <CardLogin
        sx={{
          position: "absolute",
          width: "100%",
          bottom: "0",
          minHeight: "120px",
        }}
      >
        <Grid>
          <Grid item container direction="column">
            <CardContent  sx={{minHeight: "110px"}}>
              <Grid
                container
                direction="row"
                alignItems="center"
                sx={{ justifyContent: "space-between", marginBottom: "10px"}}
              >
                <Box sx={{ display: "flex", gap: "8px" }}>
                  <StarIcon color="primary"></StarIcon>
                  <Typography variant="body1" sx={{fontWeight:"600"}}>{information.vote_average}</Typography>
                </Box>
                {state.userLogged.rol !== "user" ? (
                  isItemInFb(information.id) === true ? (
                    <Buttons
                      sx={{ borderRadius: "60px", padding: "2px 12px"}}
                      color="secondary"
                      variant="outlined"
                      text="Eliminar"
                      onClick={() => addOrDeleteItem(information, "delete")}
                    ></Buttons>
                  ) : (
                    <Buttons
                      sx={{ borderRadius: "60px", padding: "2px 12px" }}
                      color="primary"
                      variant="contained"
                      text="Agregar"
                      onClick={() => addOrDeleteItem(information, "add")}
                    ></Buttons>
                  )
                ) : isItemViewed(`${information.id}`) === true ? (
                  <Buttons
                    sx={{ borderRadius: "60px", padding: "2px 12px" }}
                    color="primary"
                    variant="contained"
                    text="Visto"
                    onClick={() => changeStateItem(information, "delete")}
                  ></Buttons>
                ) : (
                  <Buttons
                    sx={{ borderRadius: "60px", padding: "2px 12px" }}
                    color="secondary"
                    variant="outlined"
                    text="No visto"
                    onClick={() => changeStateItem(information, "add")}
                  ></Buttons>
                )}
              </Grid>

              <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"600"}}>
                {information.title}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardLogin>
    </Card>
  );
};

export { CardComponent };
