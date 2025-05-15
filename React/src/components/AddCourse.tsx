// import { useForm } from "react-hook-form";
// import CourseStore, { courseType } from "../stores/CourseStore"
// import { UserContext, UserContextType } from "./UserProvider";
// import { useContext } from "react";
// import { Box, Button, TextField } from "@mui/material";
// import { object, string } from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";


// const style = {
//     position: 'absolute',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// }

// const schema = object({
//     title: string().required('title is required')
// })

// const AddCourse = () => {


//     const { user } = useContext<UserContextType | undefined>(UserContext) || { user: null, userDispatch: () => { } };

//     const { register, handleSubmit, formState: { errors }, reset } = useForm<courseType>({
//         resolver: yupResolver(schema),
//     })


//     const onSubmit = (data: courseType) => {
//         data.teacherId = user?.id ?? 0
//         CourseStore.addCourse(data, user?.id ?? 0)
//         reset();
//     }

//     // const handleContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     //     e.preventDefault()
//     //     const lines = e.target.value.split('\n')
//     //     setValue('description',lines)
//     // }

//     return (<>
//         <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={style}>
//             <TextField label="title" error={!!errors.title} fullWidth {...register('title')} />
//             <TextField label="number of lessons" fullWidth {...register('numberOfLessons')} />
//             <TextField label="description" fullWidth {...register('description')}
//                 sx={{
//                     maxHeight: '150px',
//                     overflowY: 'auto'
//                 }} />
//             {/* <TextField label="instruction" placeholder="for your convenience you can move lines..." fullWidth multiline {...register('instructions')}
//                 sx={{
//                     maxHeight: '150px',
//                     overflowY: 'auto'
//                 }} /> */}
    
//             <Button type="submit" variant="contained" sx={{ mt: 2 }}>
//                 Submit
//             </Button>
//         </Box>
//     </>)
// }

// export default AddCourse
