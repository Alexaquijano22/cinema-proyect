import { Box, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Layout } from "../../layout";

const Loading: FC = () => {

    const location = useLocation();

    return (
        <Layout hideHeader={location.pathname === "/login" || location.pathname === "/sign-up" ? true : false}>
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
