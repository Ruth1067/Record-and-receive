// import { FormEvent, useContext, useRef, useState } from "react";
// import { UserContext, UserContextType } from "./UserProvider";
// import { Box, Button, Modal, SxProps, TextField, Theme } from "@mui/material";
// import apiService from '../ApiService';
// import UserNameAvatar from './UserNameAvatar';

// const style: SxProps<Theme> = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// }

// const Login = () => {
//     const {userDispatch } = useContext<UserContextType | undefined>(UserContext) || { user: null, userDispatch: () => {} };
//     const [isShow, setIsShow] = useState(false);
//     const emailRef = useRef<HTMLInputElement>(null);
//     const passwordRef = useRef<HTMLInputElement>(null);

//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();
//         try {
//             await apiService.login(emailRef.current?.value || '', passwordRef.current?.value || '');
//             const loggedInUser = apiService.getLoginUser();
//             userDispatch({ type: 'POST', data: loggedInUser });
//             setIsShow(false);
//             console.log("enter.....")
//         } catch (error) {
//             alert('התחברות נכשלה');
//         }
//     };

//     return (
//         <>
//             <UserNameAvatar />
//             <Button onClick={() => { setIsShow(!isShow) }}>login</Button>
//             {isShow &&
//                 <Modal open={isShow} onClose={() => { setIsShow(false) }}
//                     aria-labelledby="modal-modal-title"
//                     aria-describedby="modal-modal-description">
//                     <Box sx={style}>
//                         <TextField label="email" inputRef={emailRef} />
//                         <TextField label="password" type="password" inputRef={passwordRef} />
//                         <Button onClick={handleSubmit}>submit</Button>
//                     </Box>
//                 </Modal>
//             }
//         </>
//     );
// };

// export default Login;
import { FormEvent, useContext, useRef, useState } from "react";
import { UserContext, UserContextType } from "./UserProvider";
import { Box, Button, Modal, SxProps, TextField, Theme } from "@mui/material";
import apiService from '../ApiService';
import UserNameAvatar from './UserNameAvatar';

const style: SxProps<Theme> = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Login = () => {
    const { userDispatch } = useContext<UserContextType | undefined>(UserContext) || { user: null, userDispatch: () => {} };
    const [isShow, setIsShow] = useState(false);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await apiService.login(emailRef.current?.value || '', passwordRef.current?.value || '');
            const loggedInUser = apiService.getLoginUser();
            userDispatch({ type: 'POST', data: loggedInUser }); // העברת הנתונים הלאה
            setIsShow(false);
            console.log("enter.....");
        } catch (error) {
            alert('התחברות נכשלה');
        }
    };

    return (
        <>
            <UserNameAvatar />
            <Button onClick={() => { setIsShow(!isShow) }}>login</Button>
            {isShow &&
                <Modal open={isShow} onClose={() => { setIsShow(false) }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <TextField label="email" inputRef={emailRef} />
                        <TextField label="password" type="password" inputRef={passwordRef} />
                        <Button onClick={handleSubmit}>submit</Button>
                    </Box>
                </Modal>
            }
        </>
    );
};

export default Login;

// import { FormEvent, useContext, useRef, useState } from "react";
// import { UserContext, UserContextType } from "./UserProvider";
// import { Box, Button, Modal, SxProps, TextField, Theme } from "@mui/material";
// import apiService from '../ApiService';
// import UserNameAvatar from './UserNameAvatar';

// const style: SxProps<Theme> = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// }

// const Login = () => {
//     const { userDispatch } = useContext<UserContextType | undefined>(UserContext) || { user: null, userDispatch: () => {} };
//     const [isShow, setIsShow] = useState(false);
//     const emailRef = useRef<HTMLInputElement>(null);
//     const passwordRef = useRef<HTMLInputElement>(null);

//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();
//         try {
//             await apiService.login(emailRef.current?.value || '', passwordRef.current?.value || '');
//             const loggedInUser = apiService.getLoginUser();
//             userDispatch({ type: 'POST', data: loggedInUser });
//             setIsShow(false);
//         } catch (error) {
//             alert('התחברות נכשלה');
//         }
//     };

//     return (
//         <>
//             <UserNameAvatar />
//             <Button onClick={() => { setIsShow(!isShow) }}>login</Button>
//             {isShow &&
//                 <Modal open={isShow} onClose={() => { setIsShow(false) }}
//                     aria-labelledby="modal-modal-title"
//                     aria-describedby="modal-modal-description">
//                     <Box sx={style}>
//                         <TextField label="email" inputRef={emailRef} />
//                         <TextField label="password" type="password" inputRef={passwordRef} />
//                         <Button onClick={handleSubmit}>submit</Button>
//                     </Box>
//                 </Modal>
//             }
//         </>
//     );
// };

// export default Login;
