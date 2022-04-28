import { Box, Container } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";

const MainTag = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Main: FC = ({ children }) => {
  return <MainTag>{children}</MainTag>;
};

export { Main };
