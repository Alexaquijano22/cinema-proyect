import { createContext, Dispatch, FC, useReducer } from "react";
import { User } from "../../types";

type InitialStateType = {
    userLogged: User,
}

type ContextType = {
    state: InitialStateType, 
    dispatch: Dispatch<any>;
}

const initialState = {
    userLogged: {},
}

const AuthContext = createContext<ContextType>({state: initialState, dispatch: () => null})


let authReducer = (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, userLogged: action.payload }
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