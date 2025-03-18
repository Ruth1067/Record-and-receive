import { useState } from 'react';
import axios from 'axios';

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phone: string;
}

interface UpdateDetailsFormProps {
    onClose: () => void;
    user: User;
}

const UpdateDetailsForm = ({ onClose, user }: UpdateDetailsFormProps) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState(user.address);
    const [phone, setPhone] = useState(user.phone);
    const [message, setMessage] = useState('');

    const handleUpdate = async () => {
        try {
            const updatedData: any = {};
            if (firstName !== user.firstName) updatedData.firstName = firstName;
            if (lastName !== user.lastName) updatedData.lastName = lastName;
            if (email !== user.email) updatedData.email = email;
            if (address !== user.address) updatedData.address = address;
            if (phone !== user.phone) updatedData.phone = phone;
            if (password) updatedData.password = password;

            await axios.put(`http://localhost:3000/api/user/${user.id}`, updatedData);
            setMessage('Details updated successfully!');
            onClose();
        } catch (error) {
            setMessage('Update failed');
        }
    };

    return (
        <div>
            <h2>Update User Details</h2>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
            <button onClick={handleUpdate}>Update</button>
            {message && <p>{message}</p>}
            <button onClick={onClose}>Cancel</button>
        </div>
    );
};

export default UpdateDetailsForm;
