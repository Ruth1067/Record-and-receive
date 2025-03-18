import React from 'react';
import { Button, Typography } from '@mui/material';

interface UserProfileProps {
    userName: string;
    avatarContent: string;
    onLogout: () => void;
    onUpdateDetails: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ userName, avatarContent, onLogout, onUpdateDetails }) => {
    return (
        <div>
            <div>{avatarContent}</div>
            <Typography variant="h6">{userName}</Typography>
            <Typography>+ {userName}! Welcome</Typography>
            <Button onClick={onLogout}>Logout</Button>
            <Button onClick={onUpdateDetails}>Update Details</Button>
        </div>
    );
};

export default UserProfile;
