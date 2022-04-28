import { Box, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Layout } from "../../layout";

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
                <ClipLoader color="primary" loading={true} size={70} />
                <Typography variant="h6">Cargando...</Typography>
            </Box>
        </Layout>
    );
};

export { Loading };
