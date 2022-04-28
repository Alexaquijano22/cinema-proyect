import { Container, Box, Alert, AlertTitle } from "@mui/material";
import { FC, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../../context/Auth";

const MainTag = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Main: FC = ({ children }) => {

  const { state, dispatch } = useContext(AuthContext);

  return (
    <>
      <Box>
        {state.alert.state ? (
          <Box sx={{ position: "absolute", paddingTop: "5em", zIndex: 3, display: "flex", width: "100%", justifyContent: "center" }}>
            <Alert severity={state.alert.mode === "error" ? "error" : "success"} sx={{margin: "0em 3em"}}>
              <AlertTitle>{state.alert.title}</AlertTitle>
              {state.alert.message}
            </Alert>
          </Box>
        ) : null}
        <MainTag>{children}</MainTag>
      </Box>

    </>
  )
};

export { Main };
