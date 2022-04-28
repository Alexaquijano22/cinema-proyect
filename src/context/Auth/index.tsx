import { createContext, Dispatch, FC, useReducer } from "react";
import { User } from "../../types";

type InitialStateType = {
    userLogged: User,
    alert: {state: boolean, mode: string, title: string, message: string}
}

type ContextType = {
    state: InitialStateType, 
    dispatch: Dispatch<any>;
}

const initialState = {
    userLogged: {},
    alert: {state: false, mode: "success", title: "", message: ""}
}

const AuthContext = createContext<ContextType>({state: initialState, dispatch: () => null})


let authReducer = (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, userLogged: action.payload }
        case "ALERT":
            return { ...state, alert: action.payload}
        default:
            return initialState
    }
}

const AuthProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }