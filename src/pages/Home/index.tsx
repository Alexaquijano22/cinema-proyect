import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth";
import { WithAuth } from "../../hoc"
import { useAuth, useInfoDB } from "../../hooks";

const Home = () => {

    const { logout } = useAuth()

    const {getMovies} = useInfoDB()

    
    useEffect(() => {
      getMovies()
    }, [])
    

    return (
        <div>
            <div>Dash</div>
            <button onClick={() => logout()}>Cerrar sesion</button>
        </div>
    )
}

export const HomePage = WithAuth(Home);