import React, { createContext, useReducer, useContext } from 'react';

interface AuthState {
    user: { id: string; name: string } | null;
    isLoggedIn: boolean;
}

const initialState: AuthState = { user: null, isLoggedIn: false };
const AuthContext = createContext<any>(null);

const authReducer = (state: AuthState, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload, isLoggedIn: true };
        case 'LOGOUT':
            return { ...state, user: null, isLoggedIn: false };
        default:
            return state;
    }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
