import { Avatar } from "@mui/material";
import { useContext } from "react";
import { UserContext, UserContextType } from "./UserProvider";

const UserNameAvatar = () => {
    const { user } = useContext<UserContextType | undefined>(UserContext) || { user: null, userDispatch: () => {} };

    const getInitials = () => {
        if (user) {
            return user.email?.charAt(0).toUpperCase();
        }
        return <img src="/broken-image.jpg" alt="Broken Avatar" style={{ width: '100%', height: '100%' }} />;
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar>{getInitials()}</Avatar>
            {user ? (
                <div style={{ marginLeft: '10px' }}>Welcome {user.userName}</div>
            ) : null}
        </div>
    );
}

export default UserNameAvatar;
