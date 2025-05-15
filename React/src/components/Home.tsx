// import { Outlet } from "react-router-dom"

// const Home = () => {
//     return (<>
//         <div>
//             home component
//         </div>
//         <Outlet/>
//     </>)
// }

// export default Home
// Home.tsx
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Home Component</h1>
            <Outlet />
        </div>
    );
}

export default Home;
