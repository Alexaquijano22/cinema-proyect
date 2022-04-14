import { FC, useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import { Admin, Detail, Home, Login, Movies, Series, SignUp, Users } from './pages';
import GlobalStyle from "./global-style/globalStyles"
import { AdminProvider } from './context/Admin';
import { createTheme, PaletteMode, Paper, ThemeProvider, useMediaQuery } from '@mui/material';

const App: FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');

  console.log(mode);

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light')
  }, [prefersDarkMode])

  const theme = useMemo(() => createTheme({
    typography: {
      fontFamily: 'Nunito',
      fontSize: 13,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500
    },
    palette: {
      mode,
      ...mode === 'light' ? {
        type: "light",
        primary: {
          main: "#ff9100",
          light: "#ffc246",
          dark: "#ccc5af",
          contrastText: "#000000",
        },
        text: {
          primary: "#212121",
          secondary: "#212124",
        },
        secondary: {
          main: "#fff8e1",
          light: "#ffffff",
          dark: "#ccc5af",
          contrastText: "#fff3f3"
        },

      } : {
        type: "dark",
        primary: {
          main: "#ff9100",
          light: "#0D1413",
          dark: "#000000",
          contrastText: "#000000",
        },
        secondary: {
          main: "#fff8e1",
          light: "#ffffff",
          dark: "#ccc5af",
          contrastText: "#ffffff"
        },
      }
    }
  }), [mode]);

  return (
    <BrowserRouter>
      <AuthProvider>
        <AdminProvider>
          <ThemeProvider theme={theme}>
            <Paper style={{ height: "100vh" }}>
              <GlobalStyle />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/sign-up' element={<SignUp />}></Route>
                <Route path='/series' element={<Series />}></Route>
                <Route path='/movies' element={<Movies />}></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path='/admin' element={<Admin />}></Route>
                <Route path="/detail/:id" element={<Detail />}></Route>
              </Routes>
            </Paper>
          </ThemeProvider>

        </AdminProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;