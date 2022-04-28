import {
  CardContent,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { SignUp as SignUpForm } from "../../components/forms";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc";
import friends from "../../assets/images/friends.webp";
import yourName from "../../assets/images/yourName.jpg";
import parasite from "../../assets/images/parasite.jpg";
import lifeIsBeaty from "../../assets/images/lifeIsBeautiful.jpg";
import hope from "../../assets/images/hope.jpg";
import monstersInk from "../../assets/images/monstersInk.webp";
import { CardLogin, Links } from "../../components/common";
import styled from "styled-components";

const ContainerLogin = styled(Container)`
  &.css-1oqqzyl-MuiContainer-root {
    max-width: 560px;
  }
`;

const SignUp: FC = () => {
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
          <ContainerLogin style={{margin:"1em"}}>
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
                      underline="none"
                      variant="h4"
                      text="Acceder"
                      variantText="h4"
                      onClick={() => history("/login")}
                    ></Links>
                    <Links
                      underline="always"
                      variant="h4"
                      text="Registrar"
                      variantText="h4"
                    ></Links>
                  </Grid>
                  <Box sx={{ m: "1em 0em 1em 0em" }}>
                    <Typography>Llena los campos para ingresar</Typography>
                  </Box>

                  <SignUpForm />
                  <Typography>
                    ¿Ya tienes cuenta?{" "}
                    <Typography
                      style={{cursor:"pointer"}}
                      component="span"
                      onClick={() => history("/login")}
                    >
                      Volver a acceder
                    </Typography>
                  </Typography>
                </CardContent>
              </Container>
            </CardLogin>
          </ContainerLogin>
        </Box>
      </Box>
    </Layout>
  );
};

export const SignUpPage = WithAuth(SignUp);
