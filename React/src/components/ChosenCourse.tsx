
// import {  useEffect, useState } from "react";
// // import ChosenCourse from "./ChosenCourse";
// import CourseStore, { courseType } from "../stores/CourseStore";
// import { observer } from "mobx-react-lite";
// import Lessons from "./Lessons";

// const style: React.CSSProperties  = { 
//     width: '50vw',
//     // height: '50vh',
//     backgroundColor: 'lightblue',
//     border: '1px solid black',
//     overflowY: 'auto'
// }

// const CourseStyle: React.CSSProperties  = { 
//     width: '30vw',
//     height: '30vh',
//     backgroundColor: 'blue',
//     border: '1px solid black',
//     overflowY: 'auto',
//     fontSize:'20px'
// }

// const TitleStyle: React.CSSProperties  = { 
//     fontSize:'25px',
//     color:'white',
// }

// const ChosenCourse = observer(({ course }: { course: courseType }) => {

//     const [selectedCourse, setSelectedCourse] = useState<courseType | null>(null);

//     useEffect(() => {
//         CourseStore.fetchCourses().catch(error => console.error('Error fetching courses:', error.message));
//     }, []);
    

//     function handleCourseClick(course: courseType) {
//         setSelectedCourse(course);
//     }
//     return (
//     <>
//         <div style={style}>
//             {selectedCourse && <Lessons course={selectedCourse} />}
//         </div>

//         <div style={style}>
//             <div>Courses List</div>
//             <ul style={{ listStyleType: 'none' }}>
//                 {CourseStore.list
//                     .filter(c => c.teacherId !== null && c.title===course.title)
//                     .map((c, i) => (
//                         <li key={i}>
//                             <button onClick={() => handleCourseClick(c)}>
//                                 <div style={CourseStyle}>
//                                     <div style={TitleStyle}>{c.title}</div>
//                                     <div>teacher: {c.teacherName}</div>
//                                     <div>description: {c.description}</div>
//                                     <div>number of lessons: {c.numberOfLessons}</div>
//                                 </div>
//                             </button>
//                         </li>
//                     ))}
//             </ul>
//         </div>
//     </>
// );
// });

// export default ChosenCourse;

// ChosenCourse.tsx
import { useEffect, useState } from "react";
import CourseStore, { courseType } from "../stores/CourseStore";
import { observer } from "mobx-react-lite";
import Lessons from "./Lessons";

const style: React.CSSProperties = {
    width: '30vw',
    margin: 'auto',
    backgroundColor: 'lightblue',
    border: '1px solid black',
    borderRadius: '8px',
    padding: '20px',
    overflowY: 'auto'
};

const ChosenCourse = observer(({ course }: { course: courseType }) => {
    const [selectedCourse, setSelectedCourse] = useState<courseType | null>(null);

    useEffect(() => {
        CourseStore.fetchCourses().catch(error => console.error('Error fetching courses:', error.message));
    }, []);

    function handleCourseClick(course: courseType) {
        setSelectedCourse(course);
    }

    return (
        <div style={style}>
            <h2>Details for {course.title}</h2>
            <div>
                {CourseStore.list
                    .filter(c => c.teacherId !== null && c.title === course.title)
                    .map((c, i) => (
                        <div key={i} onClick={() => handleCourseClick(c)} style={{ cursor: 'pointer', margin: '10px 0' }}>
                            <div style={{color:'#00796b'}}>{c.title}</div>
                            <div>Teacher: {c.teacherName}</div>
                            <div>Description: {c.description}</div>
                            <div>Number of Lessons: {c.numberOfLessons}</div>
                        </div>
                    ))}
            </div>
            {selectedCourse && <Lessons course={selectedCourse} />}
        </div>
    );
});

export default ChosenCourse;
