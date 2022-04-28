import { FC, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/Auth";
import {
  Admin,
  Detail,
  Home,
  Login,
  Movies,
  Series,
  SignUp,
  Users,
} from "./pages";
import GlobalStyle from "./global-style/globalStyles";
import styled from "styled-components";
import { AdminProvider } from "./context/Admin";
import {
  createTheme,
  PaletteMode,
  Paper,
  ThemeProvider,
  useMediaQuery,
  lighten
} from "@mui/material";

const PaperApp = styled(Paper)`
  &.css-ql5gy6-MuiPaper-root {
    background: #585858;
  }
  
`;

const App: FC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<"light" | "dark">(
    prefersDarkMode ? "dark" : "light"
  );

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        
        typography: {
          fontFamily: "Nunito",
          fontSize: 13,
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 500,
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
        
        palette: {
          mode,
          ...(mode === "light"
            ? {
                type: "light",
                primary: {
                  main: "#303f9f",
                  light: "#5f5fc4",
                  dark: "#001064",
                  contrastText: "#ffffff",
              },
                
                background: {
                  default: "rgba( 255, 255, 255, 0.25 )",
                },
                text: {
                  primary: "#121212",
                  secondary: "#121212",
                },
                secondary: {
                  main: "#ffffff",
                  light: "#ffffff",
                  dark: "#47465a",
                  contrastText: "#212121",
                },
              }
            : {
                type: "dark",
                
                primary: {
                  main: "#ff9100",
                  light: "#ffc246",
                  dark: "#ff6f00",
                  contrastText: "#000000",
                },
                background: {
                  default: "rgba( 0, 0, 0, 0.25 );",
                },
                text: {
                  primary: "#ffffff",
                  secondary: "#ffffff",
                },
                secondary: {
                  main: "#fff8e1",
                  light: "#ffffff",
                  dark: "#ccc5af",
                  contrastText: "#ffffff",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <BrowserRouter>
      <AuthProvider>
        <AdminProvider>
          <ThemeProvider theme={theme}>
            <PaperApp
              style={{ height: "100vh", overflowY: "auto" }}
              sx={{
                "&::-webkit-scrollbar": {
                  width: 8
                },
                "&::-webkit-scrollbar-track": {
                  background: theme => lighten(theme.palette.background.default, 0.5)
                },
                "&::-webkit-scrollbar-thumb": {
                  background: theme => lighten(theme.palette.secondary.dark, 0.5),
                  borderRadius: 2
                }
              }}>
              <GlobalStyle />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/sign-up" element={<SignUp />}></Route>
                <Route path="/series" element={<Series />}></Route>
                <Route path="/movies" element={<Movies />}></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/detail/:id" element={<Detail />}></Route>
              </Routes>
            </PaperApp>
          </ThemeProvider>
        </AdminProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
