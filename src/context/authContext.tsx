import {Dispatch, FC, ReactNode, createContext, useReducer} from "react";
import { AuthReducer, authInitialState } from "../state/reducers/authReducer";
import { User } from "../types";
import { AuthActions } from "../state/actions/authActions";

export const AuthStateContext = createContext<User>(authInitialState); 
export const AuthDispatchContext = createContext<Dispatch<AuthActions>>(() => undefined); 

interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider:FC<AuthProviderProps> = ({children}) =>{
    const [user, dispatch] = useReducer(AuthReducer, authInitialState);
    return (
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
}