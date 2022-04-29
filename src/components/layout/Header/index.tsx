import { Navbar } from '../Navbar';
import { AuthContext } from '../../../context/Auth';
import { useContext } from 'react';

const pagesUser = ['inicio', 'peliculas', 'series'];
const pagesAdmin = ['inicio', 'peliculas', 'series','admin'];
const settingsUsers = ['Cerrar sesión'];
const settingsAdmin = ['Usuarios', 'Cerrar sesión'];


const Header = () => {

    const {state, dispatch} = useContext(AuthContext)

    return (
        <Navbar pages={state.userLogged.rol === "admin" ? pagesAdmin : pagesUser} settings={state.userLogged.rol === "admin" ? settingsAdmin : settingsUsers} rol={state.userLogged.rol}></Navbar>
    )
}

export { Header };