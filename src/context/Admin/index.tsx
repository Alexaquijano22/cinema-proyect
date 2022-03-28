import { createContext, Dispatch, FC, useReducer } from "react";

type InitialStateType = {
    inputSearch: string,
}

type ContextType = {
    state: InitialStateType, 
    dispatch: Dispatch<any>;
}

const initialState = {
    inputSearch: "",
}

const AdminContext = createContext<ContextType>({state: initialState, dispatch: () => null})


let adminReducer = (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case "SEARCH":
            return { ...state, inputSearch: action.payload }
        default:
            return initialState
    }
}

const AdminProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(adminReducer, initialState);
    return (
        <AdminContext.Provider value={{state, dispatch}}>
            {children}
        </AdminContext.Provider>
    )
}

export { AdminProvider, AdminContext }