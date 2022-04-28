import { Box, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Layout } from "../../layout";
// Ring loader - libreria para react de spinners

const Loading: FC = () => {
    return (
        <Layout>
            <Box
                sx={{
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "15px"
                }}
            >
                <ClipLoader color="primary" loading={true} size={100} />
                <Typography variant="h5">Cargando...</Typography>
            </Box>
        </Layout>
    );
};

export { Loading };
