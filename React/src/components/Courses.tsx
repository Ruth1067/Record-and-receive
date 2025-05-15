// import { Outlet } from "react-router-dom"
// import CoursesList from "./CoursesList"

// // const style = {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// // };

// const Courses = () => {

//     return (<>
//         <Outlet />

//         {/* <div style={style}> */}
//             <CoursesList />
//         {/* </div> */}
//     </>)
// }

// export default Courses
// Courses.tsx
import { Outlet } from "react-router-dom";
import CoursesList from "./CoursesList";

const Courses = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <h1>Courses</h1>
              <Outlet />
            <CoursesList />
        </div>
    );
}

export default Courses;
