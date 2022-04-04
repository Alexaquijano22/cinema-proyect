import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import { Admin, Detail, Home, Login, Movies, Series, SignUp, Users } from './pages';
import GlobalStyle from "./global-style/globalStyles"
import { AdminProvider } from './context/Admin';

const App: FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AdminProvider>
          <GlobalStyle></GlobalStyle>
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
        </AdminProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;