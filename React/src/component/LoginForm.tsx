import { useState } from 'react';
import { Button, CircularProgress, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import UpdateDetailsForm from './UpdateDetailsForm';

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phone: string;
}

interface LoginFormProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    setUserName: (name: string) => void;
    setAvatarContent: (content: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setUser, setUserName, setAvatarContent }) => {
    const { state, dispatch } = useAuth();
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const { register, handleSubmit, reset } = useForm<{ name: string; password: string }>();

    const onSubmit = async (data: { name: string; password: string }) => {
        setLoading(true);
        setMessage('');
        try {
            const response = await axios.post('http://localhost:3000/api/user/login', {
                firstName: data.name,
                password: data.password
            });
            dispatch({ type: 'LOGIN', payload: response.data.user });
            setUser(response.data.user);
            setUserName(data.name);
            setAvatarContent(data.name.charAt(0).toUpperCase());
        } catch (error) {
            setMessage('Login failed!');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        setUser(null);
        setUserName('');
        setAvatarContent('');
        reset();
    };

    const handleUpdate = () => {
        setIsUpdating(true);
    };

    const handleCloseUpdate = () => {
        setIsUpdating(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {!state.isLoggedIn ? (
                <>
                    <TextField type="text" id="name" label="Name" variant="outlined" required {...register("name")} />
                    <TextField type="password" id="password" label="Password" variant="outlined" required {...register("password")} />
                    {loading && <CircularProgress />}
                    {message && <Typography color="error">{message}</Typography>}
                    <Button type="submit" variant="contained" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                </>
            ) : (
                <Typography>Welcome, {state.user?.firstName}!</Typography>
            )}

            {state.isLoggedIn && (
                <>
                    <Button variant="contained" onClick={handleLogout}>
                        Logout
                    </Button>
                    <Button variant="contained" onClick={handleUpdate}>
                        Update details
                    </Button>
                </>
            )}

            {isUpdating && state.user && (
                <UpdateDetailsForm onClose={handleCloseUpdate} user={state.user} />
            )}
        </form>
    );
};

export default LoginForm;
