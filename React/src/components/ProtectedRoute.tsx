import { ReactNode, useContext } from "react"
import { UserContext, UserContextType } from "./UserProvider"
import Home from "./Home"

export default ({children}:{children:ReactNode })=>{
    
    const { user } = useContext<UserContextType | undefined>(UserContext) || { user: null, userDispatch: () => {} };
    
    return user?.id? children: <>return to home... <Home/></>
}
