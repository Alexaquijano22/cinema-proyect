import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import { User } from "../../types";
import { useUsers } from "../useUsers";

export type PayloadLogin = {
    email: string;
    password: string;
}

const useAuth = () => {
    const [hasUserLoggedIn, setHasUserLoggedIn] = useState<boolean | undefined>()
    const { state, dispatch } = useContext(AuthContext);
    const [tokenStorage, setTokenStorage] = useState<string | undefined>(localStorage.getItem("token") || undefined);
    const { generateToken, getUsers } = useUsers()

    const history = useNavigate()

    useEffect(() => {
        if (tokenStorage) localStorage.setItem("token", tokenStorage)
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
            dispatch({
                type: "ALERT",
                payload: {
                    state: true,
                    mode: "error",
                    title: "Error",
                    message: "El usuario o la contraseña son incorrectos, intentalo de nuevo"
                }
            })
            setTimeout(() => {
                dispatch({
                  type: "ALERT",
                  payload: {
                    state: false,
                    mode: "success",
                    title: "",
                    message: ""
                  }
                })
              }, 4000);
        }

    }

    const loginWithToken = async () => {
        try {
            const users: User[] = await getUsers()
            const userLogged = users.find((u) => u.sessionToken === tokenStorage)
            if (userLogged && tokenStorage !== undefined) {
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
    }

    return { login, loginWithToken, logout, hasUserLoggedIn }
}

export { useAuth }