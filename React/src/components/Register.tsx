// import { FormEvent, useRef, useState } from "react";
// import { Box, Button, Modal, TextField } from "@mui/material";
// import apiService from "../ApiService";

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

// const Register = () => {
//     const [showForm, setShowForm] = useState(false);
//     const usernameRef = useRef<HTMLInputElement>(null);
//     const passwordRef = useRef<HTMLInputElement>(null);
//     const emailRef = useRef<HTMLInputElement>(null);
//     // const phonenumberRef = useRef<HTMLInputElement>(null);

//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();
//         try {
//             await apiService.register(
//                 usernameRef.current?.value || '',
//                 passwordRef.current?.value || '',
//                 emailRef.current?.value || '',
//                 // phonenumberRef.current?.value || ''
//             );
//             alert('המשתמש נרשם בהצלחה!');
//             setShowForm(false);
//         } catch (error) {
//             alert('הרשמה נכשלה');
//         }
//     };

//     return (
//         <>
//             <Button onClick={() => { setShowForm(true) }}>register</Button>
//             <Modal open={showForm} onClose={() => setShowForm(false)} disableScrollLock>
//                 <Box sx={style}>
//                     <TextField label="Username" inputRef={usernameRef} />
//                     <TextField label="Email" inputRef={emailRef} />
//                     <TextField label="Password" type="password" inputRef={passwordRef} />
//                     כאן צריך להיות שדה מערך התפקידים - ROLES
//                     {/* <TextField label="Phone" inputRef={phonenumberRef} /> */}
//                     <Button onClick={handleSubmit}>Submit</Button>
//                 </Box>
//             </Modal>
//         </>
//     );
// };

// export default Register;
// import { FormEvent, useRef, useState } from "react";
// import { Box, Button, Modal, TextField } from "@mui/material";
// import apiService from "../ApiService";

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

// const Register = () => {
//     const [showForm, setShowForm] = useState(false);
//     const usernameRef = useRef<HTMLInputElement>(null);  
//     const emailRef = useRef<HTMLInputElement>(null);
//     const passwordRef = useRef<HTMLInputElement>(null);
//     const phonenumberRef = useRef<HTMLInputElement>(null);
//     const rolesRef = useRef<HTMLInputElement>(null); // שדה לתפקידים

//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();
//         try {
//             await apiService.register(
//                 usernameRef.current?.value || '', 
//                 emailRef.current?.value || '',
//                 passwordRef.current?.value || '',
//                 phonenumberRef.current?.value||'',
//                 rolesRef.current?.value || '' // הוספת תפקידים
//             );
//             alert('המשתמש נרשם בהצלחה!');
//             setShowForm(false);
//         } catch (error) {
//             alert('הרשמה נכשלה');
//         }
//     };

//     return (
//         <>
//             <Button onClick={() => { setShowForm(true) }}>register</Button>
//             <Modal open={showForm} onClose={() => setShowForm(false)} disableScrollLock>
//                 <Box sx={style}>
//                     <TextField label="UserName" inputRef={usernameRef} />
//                     <TextField label="Email" inputRef={emailRef} />
//                     <TextField label="Password" type="password" inputRef={passwordRef} />
//                     <TextField label="PhoneNumber" inputRef={phonenumberRef} />
//                     <TextField label="Roles" inputRef={rolesRef} /> {/* שדה לתפקידים */}
//                     <Button onClick={handleSubmit}>Submit</Button>
//                 </Box>
//             </Modal>
//         </>
//     );
// };

// export default Register;
import { FormEvent, useRef, useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import apiService from "../ApiService";

const style = {
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

const Register = () => {
    const [showForm, setShowForm] = useState(false);
    const usernameRef = useRef<HTMLInputElement>(null);  
    const emailRef = useRef<HTMLInputElement>(null);
    // const passwordRef = useRef<HTMLInputElement>(null);
    const phonenumberRef = useRef<HTMLInputElement>(null);
    const rolesRef = useRef<HTMLInputElement>(null); // שדה לתפקידים

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            // פצל את המחרוזת למערך של תפקידים
            const rolesArray = rolesRef.current?.value.split(',').map(role => role.trim()) || [];

            await apiService.register(
                usernameRef.current?.value || '', 
                emailRef.current?.value || '',
                // passwordRef.current?.value || '',
                phonenumberRef.current?.value || '',
                rolesArray // העברת המערך ל-API
            );
            alert('המשתמש נרשם בהצלחה!');
            setShowForm(false);
        } catch (error) {
            alert('הרשמה נכשלה');
        }
    };

    return (
        <>
            <Button onClick={() => { setShowForm(true) }}>register</Button>
            <Modal open={showForm} onClose={() => setShowForm(false)} disableScrollLock>
                <Box sx={style}>
                    <TextField label="UserName" inputRef={usernameRef} />
                    <TextField label="Email" inputRef={emailRef} />
                    {/* <TextField label="Password" type="password" inputRef={passwordRef} /> */}
                    <TextField label="PhoneNumber" inputRef={phonenumberRef} />
                    <TextField label="Roles (comma separated)" inputRef={rolesRef} />
                    <Button onClick={handleSubmit}>Submit</Button>
                </Box>
            </Modal>
        </>
    );
};

export default Register;
