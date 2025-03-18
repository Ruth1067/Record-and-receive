import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const RegisterForm = ({ setUserName, setAvatarContent }: { setUserName: (name: string) => void; setAvatarContent: (content: string) => void; }) => {
    const { dispatch } = useAuth();
    const { register, handleSubmit } = useForm<{ firstName: string; lastName: string; email: string; address: string; phone: string; password: string }>();
    const [message, setMessage] = useState('');

    const onSubmit = async (data: { firstName: string; lastName: string; email: string; address: string; phone: string; password: string }) => {
        try {
            await axios.post('http://localhost:3000/api/user/register', data);
            dispatch({ type: 'LOGIN', payload: { firstName: data.firstName } });
            setUserName(data.firstName);
            setAvatarContent(data.firstName.charAt(0).toUpperCase());
            setMessage(`Registration successful! Welcome ${data.firstName}!`);
        } catch (error) {
            setMessage('Registration failed!');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register("firstName")} label="First Name" required />
            <TextField {...register("lastName")} label="Last Name" required />
            <TextField {...register("email")} label="Email" required />
            <TextField {...register("address")} label="Address" required />
            <TextField {...register("phone")} label="Phone" required />
            <TextField {...register("password")} label="Password" type="password" required />
            <Button type="submit" variant="contained">Register</Button>
            {message && <Typography color="error">{message}</Typography>}
        </form>
    );
};

export default RegisterForm;
