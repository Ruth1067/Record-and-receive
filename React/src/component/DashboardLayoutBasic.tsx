// import { useState } from 'react';
// import { PageContainer } from '@toolpad/core/PageContainer';
// import { Avatar } from '@mui/material';
// import LoginForm from './LoginForm';
// import RegisterForm from './RegisterForm';
// import React from 'react';

// interface User {
//     id: string;
//     firstName: string;
//     lastName: string;
//     email: string;
//     address: string;
//     phone: string;
// }

// function useDemoRouter(initialPath: string) {
//     const [pathname, setPathname] = React.useState(initialPath);

//     const router = React.useMemo(() => {
//         return {
//             pathname,
//             searchParams: new URLSearchParams(),
//             navigate: (path: string | URL) => setPathname(String(path)),
//         };
//     }, [pathname]);

//     return router;
// }

// const DashboardLayoutBasic = () => {
//     const [userName, setUserName] = useState('');
//     const [avatarContent, setAvatarContent] = useState('');
//     const [user, setUser] = useState<User | null>(null);

//         const onClickLogin=()=>{
//             <LoginForm 
//             user={user} 
//             setUser={setUser} 
//             setUserName={setUserName} 
//             setAvatarContent={setAvatarContent} 
//             />
//         }
//                     {/* <Home /> */}
//         const onClickRegister=()=>{
//             <RegisterForm setUserName={setUserName} setAvatarContent={setAvatarContent} />
//         }       
           
//        return (
//         <>
//           <PageContainer>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//              {avatarContent ? (
//              <Avatar>{avatarContent}</Avatar>
//               ) : (
//             <Avatar />
//            )}
//           {userName && <h2 style={{ marginLeft: '10px' }}>{userName}</h2>}
//           </div>
//         </PageContainer>
//         <button onClick={onClickLogin}>Login</button>
//         <button onClick={onClickRegister}>Register</button>
//         </> 
//         )      
// };

// export default DashboardLayoutBasic;


import { useState } from 'react';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Avatar, Modal } from '@mui/material';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import React from 'react';
import MyModalComponent from './MyModalComponent';

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phone: string;
}

function useDemoRouter(initialPath: string) {
    const [pathname, setPathname] = React.useState(initialPath);

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path: string | URL) => setPathname(String(path)),
        };
    }, [pathname]);

    return router;
}

const DashboardLayoutBasic = () => {
    const [userName, setUserName] = useState('');
    const [avatarContent, setAvatarContent] = useState('');
    const [user, setUser] = useState<User | null>(null);
    const [showLoginForm, setShowLoginForm] = useState(false); // State to control LoginForm visibility
    const [showRegisterForm, setShowRegisterForm] = useState(false); // State to control RegisterForm visibility

    const onClickLogin = () => {
        setShowLoginForm(true); // Show the LoginForm
        setShowRegisterForm(false); // Hide the RegisterForm if it was open
    };

    const onClickRegister = () => {
        setShowRegisterForm(true); // Show the RegisterForm
        setShowLoginForm(false); // Hide the LoginForm if it was open
    };

    return (
        <>
            <PageContainer>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {avatarContent ? (
                        <Avatar>{avatarContent}</Avatar>
                    ) : (
                        <Avatar />
                    )}
                    {userName && <h2 style={{ marginLeft: '10px' }}>{userName}</h2>}
                </div>
            </PageContainer>
            <button onClick={onClickLogin}>Login</button>
            <button onClick={onClickRegister}>Register</button>
            
            {/* Conditionally render the LoginForm or RegisterForm based on state */}
            {showLoginForm && ( <MyModalComponent></MyModalComponent> 
            // open = {showLoginForm}
            //   aria-labelledby="modal-modal-title"
            //   aria-describedby="modal-modal-description">
                /* <LoginForm 
                    user={user} 
                    setUser={setUser} 
                    setUserName={setUserName} 
                    setAvatarContent={setAvatarContent} 
                /> */
              
            )}
            {showRegisterForm && (
                <RegisterForm 
                    setUserName={setUserName} 
                    setAvatarContent={setAvatarContent} 
                />
            )}
        </>
    );
};

export default DashboardLayoutBasic;
