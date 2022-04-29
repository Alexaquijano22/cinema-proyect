import { FC } from "react";
import { WithAuth } from "../../hoc";
import { Login as LoginForm } from "../../components/forms";
import { Layout } from "../../components/layout";
import {
  Box,
  CardContent,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import friends from "../../assets/images/friends.webp";
import yourName from "../../assets/images/yourName.jpg";
import parasite from "../../assets/images/parasite.jpg";
import lifeIsBeaty from "../../assets/images/lifeIsBeautiful.jpg";
import hope from "../../assets/images/hope.jpg";
import monstersInk from "../../assets/images/monstersInk.webp";
import { CardLogin, Links } from "../../components/common";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const history = useNavigate();

  const itemData = [
    {
      title: "friends",
      img: friends,
      rows: 4,
      cols: 2,
    },
    {
      title: "life is beautiful",
      img: lifeIsBeaty,
      rows: 2,
      cols: 2,
    },
    {
      title: "hope",
      img: hope,
      rows: 2,
      cols: 1,
    },
    {
      title: "parasite",
      img: parasite,
      rows: 2,
      cols: 0,
    },
    {
      title: "forest-gump",
      img: monstersInk,
      rows: 2,
      cols: 2,
    },
    {
      title: "your name",
      img: yourName,
      rows: 2,
      cols: 2,
    },
  ];

  const srcset = (image: string, size: number, rows = 1, cols = 1) => {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  };

  return (
    <Layout hideHeader>
      <Box
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            padding: "1em",
            height: "max-content",
            width: "100%",
            alignSelf: "center",
            opacity: "0.7",
          }}
        >
          <ImageList variant="quilted" cols={4} rowHeight={121}>
            {itemData.map((item) => (
              <ImageListItem
                key={item.title}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container style={{ margin: "1em", maxWidth: "560px" }}>
            <CardLogin>
              <Container sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Grid
                    container
                    direction="row"
                    gap={2}
                    sx={{ marginTop: "0.5em" }}
                  >
                    <Links
                      underline="always"
                      variant="h4"
                      text="Acceder"
                      variantText="h4"
                    ></Links>
                    <Links
                      underline="none"
                      variant="h4"
                      text="Registrar"
                      variantText="h4"
                      onClick={() => history("/sign-up")}
                    ></Links>
                  </Grid>
                  <Box sx={{ m: "1em 0em 1em 0em" }}>
                    <Typography>Llena los campos para ingresar</Typography>
                  </Box>
                  <LoginForm />
                  <Typography variant="subtitle1">
                    ¿Aun no tienes cuenta?{" "}
                    <Typography variant="subtitle1"
                      style={{ cursor: "pointer" }}
                      component="span"
                      onClick={() => history("/sign-up")}
                    >
                      Ir a registrar una cuenta
                    </Typography>
                  </Typography>
                  <Typography sx={{marginTop: "0.5em"}}>
                    Para acceder como administrador, utilizar los siguientes
                    datos:
                  </Typography>
                  <Typography>Usuario: admin@cinemada.com</Typography>
                  <Typography>Contraseña: 012345678</Typography>
                </CardContent>
              </Container>
            </CardLogin>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export const LoginPage = WithAuth(Login);
