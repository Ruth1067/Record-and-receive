import { createBrowserRouter } from "react-router"
import About from "./components/About"
import Home from "./components/Home"
import AppLayout from "./components/AppLayout"
import Courses from "./components/Courses"
// import AddCourse from "./components/AddCourse"
import ProtectedRoute from "./components/ProtectedRoute"
import FileUploader from "./components/FileUploader"
import { Download } from "@mui/icons-material"
// import ChosenCourse from "./components/ChosenCourse"
// import Lesson from "./components/Lesson"


export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <>error fetching</>,
        children: [
            {
                path: 'about', element: <About/>,
            },
            {
                path: 'courses', element: <Courses/>,
            },
            {
                path: 'fileuploader', element: <FileUploader/>,
            },
            {
                path: 'download', element: <Download/>,
            },
            {
                path: 'add-course', element:<ProtectedRoute><About/></ProtectedRoute>,

                // path: 'add-course', element:<ProtectedRoute><AddCourse/></ProtectedRoute>,
            },
            // { path: 'chosencourse', element: <ChosenCourse/> },
            // { path: 'courses/chosencourse/lesson', element: <Lesson course={{
            //     folderId: 0,
            //     teacherId: 0,
            //     title: "",
            //     teacherName: undefined,
            //     description: undefined,
            //     numberOfLessons: undefined
            // }}/> },
            { path: '/', element: <Home/> },
        ]
    }
])
