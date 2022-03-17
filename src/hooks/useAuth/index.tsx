import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateToken, getUsers } from "../../api";
import { AuthContext } from "../../context/Auth";
import { User } from "../../types";

export type PayloadLogin = {
    email: string;
    password: string;
}

const useAuth = () => {
    const [ hasUserLoggedIn, setHasUserLoggedIn ] = useState<boolean | undefined>()
    const { state, dispatch } = useContext(AuthContext);
    const [tokenStorage, setTokenStorage] = useState<string | undefined>(localStorage.getItem("token") || undefined);
    
    const history = useNavigate()

    useEffect(() => {
        if(tokenStorage) localStorage.setItem("token", tokenStorage)
    }, [tokenStorage])

    useEffect(() => {
        loginWithToken()
    }, [])


    const login = async (data: PayloadLogin) => {
        try {
            const users: User[] = await getUsers()
            const userLogged = users.find((u) => u.email === data.email && u.password === data.password)
            if (userLogged) {
                const token = await generateToken(userLogged)
                if (token) {
                    setTokenStorage(token)
                    dispatch({
                        type: "LOGIN",
                        payload: userLogged
                    })
                } else {
                    setHasUserLoggedIn(false)
                }
            } else {
                throw new Error('El usuario no existe')
            }
        } catch (e) {
            console.log(e)
        }

    }

    const loginWithToken = async () => {
        try {
            const users: User[] = await getUsers()
            console.log(users.find((u) => u.sessionToken === tokenStorage));
            const userLogged = users.find((u) => u.sessionToken === tokenStorage)
            console.log(userLogged);
            if (userLogged) {
                setHasUserLoggedIn(true)
                dispatch({
                    type: "LOGIN",
                    payload: userLogged
                })
            } else {
                setHasUserLoggedIn(false)
            }
        } catch (e) {
            console.log(e);
        }
    }

    const logout = () => {
        localStorage.removeItem("token")
        dispatch({
            type: "LOGIN",
            payload: {}
        })
        history("/login")
        console.log(state);
    }

    const resetPassword = () => {
        console.log(`Reset password`);
    }

    const refreshToken = () => {
        console.log(`Refresh token`);
    }

    return { login, loginWithToken, logout, resetPassword, refreshToken, hasUserLoggedIn }
}

export { useAuth }