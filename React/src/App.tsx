import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from './context/AuthContext';
import store from './redux/store';
import DashboardLayoutBasic from './component/DashboardLayoutBasic';

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phone: string;
}
const App = () => {
    const [] = useState<User | null>(null);
    const [userName] = useState<string>('');

    return (
        <Provider store={store}>
            <AuthProvider>
                <Router>
                    <DashboardLayoutBasic userName={userName} />
                </Router>
            </AuthProvider>
        </Provider>
    );
};

export default App;

