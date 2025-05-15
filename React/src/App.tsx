import './App.css'
import UserCom from './components/UserCom';
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './Router';
import UserProvider from './components/UserProvider';


function App() {


  return (<>

    <UserProvider>
      <UserCom/>
      
    <RouterProvider router={myRouter}/>
    </UserProvider>
  </>)
}

export default App
