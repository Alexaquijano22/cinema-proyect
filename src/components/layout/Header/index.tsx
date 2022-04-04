import { Navbar } from '../Navbar';
import { AuthContext } from '../../../context/Auth';
import { useContext } from 'react';

const pagesUser = ['home', 'movies', 'series'];
const pagesAdmin = ['home', 'movies', 'series','admin', 'users'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Header = () => {

    const {state, dispatch} = useContext(AuthContext)

    return (
        <Navbar pages={state.userLogged.rol === "admin" ? pagesAdmin : pagesUser} settings={settings} rol={state.userLogged.rol}></Navbar>
    )
}

export { Header };