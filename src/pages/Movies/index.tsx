import { Container, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { InfoList } from "../../components/common/parts";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc";
import { useInfoDB } from "../../hooks";

const Movies: FC = () => {
  const { itemsFb, getMoviesFb } = useInfoDB();

  useEffect(() => {
    getMoviesFb();
  }, []);

  return (
    <Layout>
      <Container>
        {itemsFb?.length > 0 ? (
          <InfoList information={itemsFb} site="movies" />
        ) : (
          <Container style={{ paddingTop: "9em", paddingBottom: "0em" }}>
            <Typography variant="h6">
              No se han encontrado peliculas agregadas a la base de datos.
            </Typography>
          </Container>
        )}
      </Container>
    </Layout>
  );
};

export const MoviesPage = WithAuth(Movies);
