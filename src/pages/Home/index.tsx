import { useContext, useEffect } from "react";
import { Layout } from "../../components/layout";
import { AuthContext } from "../../context/Auth";
import { WithAuth } from "../../hoc"
import { useAuth, useInfoDB } from "../../hooks";

const Home = () => {

    const { logout } = useAuth()

    // const {getMoviesDB} = useInfoDB()

    
    // useEffect(() => {
    //   getMovies()
    // }, [])
    

    return (
        <Layout>
            <div>Dash</div>
            <button onClick={() => logout()}>Cerrar sesion</button>

        </Layout>
    )
}

export const HomePage = WithAuth(Home);