import React from 'react';
import { Avatar, Box } from '@mui/material';

interface LayoutProps {
    children: React.ReactNode;
    userName?: string;
}

const Layout = ({ children, userName }:LayoutProps) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
            {userName ? (
                <Avatar 
                    sx={{ 
                        bgcolor: 'blueGrey[500]', 
                        width: 64, 
                        height: 64, 
                        fontSize: '2rem', 
                        marginRight: '16px', 
                        marginBottom: '50px'
                    }}
                >
                    {userName.charAt(0)}
                </Avatar>
            ) : (
                <Avatar 
                    src="/broken-image.jpg" 
                    sx={{ 
                        bgcolor: 'blueGrey[500]', 
                        width: 64, 
                        height: 64, 
                        marginRight: '16px',
                        marginBottom: '50px'
                    }}
                />
            )}
            <Box sx={{ flexGrow: 1 }}>
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
