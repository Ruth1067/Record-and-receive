import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { User, userReducer,Action } from '../user';

export type UserContextType = {
    user: User;
    userDispatch: Dispatch<Action>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }:{ children: ReactNode }) => {
    const [user, userDispatch] = useReducer(userReducer, {} as User);

    return (
        <UserContext.Provider value={{ user, userDispatch }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider