// import { courseType } from "../stores/CourseStore";

// const Cstyle: React.CSSProperties  = { 
//     width: '40vw',
//     height: '20vh',
//     backgroundColor: 'blue',
//     border: '1px solid black',
//     overflowY: 'auto',
//     fontSize:'18px',
//     padding:'20px'
// }

// const Lesson = ({ course }: { course: courseType }) => {
//     if (!course) {
//         return <div>No course selected</div>;
//     }

//     // מסנן את הקורסים על פי התנאים המבוקשים
//     // const relatedCourses = CourseStore.list.filter(c =>
//     //     c.title === course.title && c.teacherId !== null
//     // );

//     return (
//         <>
//             <div>
//                 <h3>Course:</h3>
//                 <ul style={{ listStyleType: 'none' }}>
//                     {/* {relatedCourses.map((relatedCourse, index) => (  */}
//                        <li>
//                             <div style={Cstyle}>
//                             <div>Course: {course.title}</div>
//                             <div>Teacher: {course.teacherName}</div>
//                             <div>Number of Lessons: {course.numberOfLessons}</div>
//                             <div>Description: {course.description}</div>
//                             </div>
//                          </li>
//                  </ul> 
//             </div>
//         </>
//     );
// }

// export default Lesson;

// Lesson.tsx
import { courseType } from "../stores/CourseStore";

const Cstyle: React.CSSProperties = {
    width: '17vw',
    margin: '15px auto',
    backgroundColor: 'lightblue',
    border: '1px solid black',
    borderRadius: '8px',
    padding: '20px',
    overflowY: 'auto'
};

const Lesson = ({ course }: { course: courseType }) => {
    if (!course) {
        return <div>No course selected</div>;
    }

    return (
        <div style={Cstyle}>
            <h3>Course: {course.title}</h3>
            <div>Teacher: {course.teacherName}</div>
            <div>Number of Lessons: {course.numberOfLessons}</div>
            <div>Description: {course.description}</div>
        </div>
    );
}

export default Lesson;
