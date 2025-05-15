import { useContext } from "react";
import { Link } from "react-router"
import { UserContext, UserContextType } from "./UserProvider";


const style: React.CSSProperties = {
    position: 'absolute',
    top: '2%',
    right: '2%',
};

const NavBar = () => {

    const {user} =  useContext<UserContextType | undefined>(UserContext) || { user: null, userDispatch: () => { } };

    return (<>
        <nav style={style}>
            <Link to='/'>Home</Link> | 
            <Link to='/about'> About</Link> | 
            <Link to='/courses'> Courses | </Link>
            <Link to='/fileuploader'> Upload  </Link>
            {/* <Link to='/download'> Download</Link> */}
            {user?.email && <Link to='/about'> | Add Course </Link>}

        </nav>
    </>)
}

export default NavBar