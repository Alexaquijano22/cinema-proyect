import { Container, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { InfoList } from "../../components/common/parts";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc";
import { useInfoDB } from "../../hooks";

const Series: FC = () => {
  const { itemsFb, getSeriesFb } = useInfoDB();

  useEffect(() => {
    getSeriesFb();
  }, []);

  return (
    <Layout>
      <Container>
        {itemsFb?.length > 0 ? (
          <InfoList information={itemsFb} site="series" />
        ) : (
          <Container style={{ paddingTop: "9em", paddingBottom: "0em" }}>
            <Typography variant="h6">
              No se han encontrado series agregadas a la base de
              datos.
            </Typography>
          </Container>
        )}
      </Container>
    </Layout>
  );
};

export const SeriesPage = WithAuth(Series);
