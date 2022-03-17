import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import { Admin, Home, Login, SignUp } from './pages';

const App: FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;