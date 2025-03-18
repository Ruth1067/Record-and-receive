// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { TextField, Button } from '@mui/material';
// import axios from 'axios';
// import { addRecipe } from '../redux/recipeSlice';
// import { useDispatch } from 'react-redux';
// import { useAuth } from '../context/AuthContext';

// const schema = yup.object().shape({
//     title: yup.string().required('Title is required'),
//     description: yup.string().required('Description is required'),
//     ingredients: yup.array().of(yup.string()).required('Ingredients are required'),
//     instructions: yup.string().required('Instructions are required'),
// });

// function AddRecipeForm() {
//     const dispatch = useDispatch();
//     const { state } = useAuth();
//     const { control, handleSubmit, formState: { errors } } = useForm({
//         resolver: yupResolver(schema),
//     });

//     const onSubmit = async (data: any) => {
//         if (!state.isLoggedIn) {
//             console.error('User must be logged in to add a recipe.');
//             return;
//         }
//         try {
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 console.error('No token found. User might not be logged in.');
//                 return;
//             }
            
//             const response = await axios.post('http://localhost:3000/api/recipes', data, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
            
//             dispatch(addRecipe(response.data));
//             console.log('Recipe added successfully:', response.data); // לוג של הצלחה
//         } catch (error) {
//             console.error('Error adding recipe');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <Controller
//                 name="title"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                     <TextField
//                         {...field}
//                         label="Title"
//                         error={!!errors.title}
//                         helperText={errors.title?.message}
//                     />
//                 )}
//             />
//             <Controller
//                 name="description"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                     <TextField
//                         {...field}
//                         label="Description"
//                         error={!!errors.description}
//                         helperText={errors.description?.message}
//                     />
//                 )}
//             />
//             <Controller
//                 name="instructions"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                     <TextField
//                         {...field}
//                         label="Instructions"
//                         error={!!errors.instructions}
//                         helperText={errors.instructions?.message}
//                     />
//                 )}
//             />
//             <Button type="submit" variant="contained">Add Recipe</Button>
//         </form>
//     );
// }

// export default AddRecipeForm;
