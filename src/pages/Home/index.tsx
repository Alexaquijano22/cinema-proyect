import { Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { InfoList } from "../../components/common/parts";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc";
import { useInfoDB } from "../../hooks";

const Home = () => {
  const { itemsFb, getItemsFb } = useInfoDB();

  useEffect(() => {
    getItemsFb();
  }, []);

  return (
    <Layout>
      <Container>
        {itemsFb?.length > 0 ? (
          <InfoList information={itemsFb} site="home" />
        ) : (
          <Container style={{ paddingTop: "9em", paddingBottom: "0em" }}>
            <Typography variant="h6">
              No se han encontrado series ni peliculas agregadas a la base de
              datos.
            </Typography>
          </Container>
        )}
      </Container>
    </Layout>
  );
};

export const HomePage = WithAuth(Home);
