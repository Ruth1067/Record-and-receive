// import {  useEffect, useState } from "react";
// import CourseStore, { courseType } from "../stores/CourseStore";
// import { observer } from "mobx-react-lite";
// import Lesson from "./Lesson";

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

// const Lessons = observer(({ course }: { course: courseType }) => {

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
//             {selectedCourse && <Lesson course={selectedCourse} />}
//         </div>

//         <div style={style}>
//             <div>Courses List</div>
//             <ul style={{ listStyleType: 'none' }}>
//                 {CourseStore.list
//                     .filter(c => c.teacherId == course.teacherId && c.title===course.title)
//                     .map((c, i) => (
//                         <li key={i}>
//                             <button onClick={() => handleCourseClick(c)}>
//                                 <div style={CourseStyle}>
//                                     <div style={TitleStyle}>{c.title}</div>
//                                     {/* <div>course: {c.title}</div> */}
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

// export default Lessons;

// Lessons.tsx
import { useEffect, useState } from "react";
import CourseStore from "../stores/CourseStore";
import { observer } from "mobx-react-lite";
import Lesson from "./Lesson";
import { CourseType } from '../CourseTypes'
const style: React.CSSProperties = {
    width: '25vw',
    margin: '20px auto',
    backgroundColor: 'lightblue',
    border: '1px solid black',
    borderRadius: '8px',
    padding: '20px',
    overflowY: 'auto'
};

const Lessons = observer(({ course }: { course: CourseType }) => {
    const [selectedLesson, setSelectedLesson] = useState<CourseType | null>(null);

    useEffect(() => {
        CourseStore.fetchCourses().catch(error => console.error('Error fetching courses:', error.message));
    }, []);

    function handleLessonClick(lesson: CourseType) {
        setSelectedLesson(lesson);
    }

    return (
        <div style={style}>
            <h2>Lessons for {course.title}</h2>
            <div>
                {CourseStore.list
                    .filter(c => c.teacherId === course.teacherId && c.title === course.title)
                    .map((c, i) => (
                        <div key={i} onClick={() => handleLessonClick(c)} style={{ cursor: 'pointer', margin: '10px 0' }}>
                            <div>{c.title}</div>
                            <div>Teacher: {c.teacher}</div>
                            <div>Description: {c.teacherId}</div>
                            <div>Number of Lessons: {c.number}</div>
                        </div>
                    ))}
            </div>
            {selectedLesson && <Lesson course={selectedLesson} />}
        </div>
    );
});

export default Lessons;
