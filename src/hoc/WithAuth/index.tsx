import { FC } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { Loading } from "../../components/common";
import { useAuth } from "../../hooks";
import { Login } from "../../pages";

type withAuthenticationFn = (Component: FC) => FC


const publicRoutes = ["/login", "/sign-up"]

const WithAuth: withAuthenticationFn = (Component) => {


    const Authenticated: FC = (): JSX.Element | null => {
        const { hasUserLoggedIn } = useAuth();
        const history = useNavigate()
        const location = useLocation()

        if (hasUserLoggedIn === undefined) return <Loading />
        if (hasUserLoggedIn && publicRoutes.includes(location.pathname)) history("/")
        if (hasUserLoggedIn === false && !publicRoutes.includes(location.pathname)) history("/login")

        return <Component />

    }
    return Authenticated
}

export { WithAuth }