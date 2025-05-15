// import Login from "./Login";
// import Register from "./Register";
// import { useContext, useEffect, useState } from "react";
// import { UserContext, UserContextType } from "./UserProvider";
// // import UpdateUser from "./UpdateUser";
// import UserNameAvatar from "./UserNameAvatar";
// import SignOut from "./SignOut";

// const style: React.CSSProperties = {
//     position: 'absolute',
//     top: '2%',
//     left: '2%',
// };

// const UserCom = () => {

//     const { user } = useContext<UserContextType | undefined>(UserContext) || { user: null, userDispatch: () => { } };
//     const [registered, setRegistered] = useState(false)

//     useEffect(() => {
//         user?.id ? setRegistered(true) : setRegistered(false)
//     }, [user])

//     return (<>
//         <div style={style}>
//             {!registered && <div>
//                 <Login/>
//                 <Register />
//             </div>}

//             {registered && <div>
//                 <UserNameAvatar />
//                 {/* <UpdateUser /> */}
//                 <SignOut/>
//             </div>}
//         </div>
//     </>)
// }

// export default UserCom

import Login from "./Login";
import Register from "./Register";
import { useContext, useEffect, useState } from "react";
import { UserContext, UserContextType } from "./UserProvider";
import UserNameAvatar from "./UserNameAvatar";
import SignOut from "./SignOut";

const style: React.CSSProperties = {
    position: 'absolute',
    top: '2%',
    left: '2%',
};

const UserCom = () => {
    const { user } = useContext<UserContextType | undefined>(UserContext) || { user: null, userDispatch: () => { } };
    const [registered, setRegistered] = useState(false);

    useEffect(() => {
        setRegistered(!!user?.id); // משתמשים ב-!! כדי להמיר לערך בוליאני
    }, [user]);

    return (
        <div style={style}>
            {!registered ? (
                <div>
                    <Login />
                    <Register />
                </div>
            ) : (
                <div>
                    <UserNameAvatar />
                    <SignOut />
                </div>
            )}
        </div>
    );
}

export default UserCom;
