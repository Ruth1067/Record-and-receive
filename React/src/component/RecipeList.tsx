// import React, { useEffect, useState } from 'react';

// interface Recipe {
//     id: number;
//     title: string;
//     description: string;
//     authorId: number;
//     ingredients: string[];
//     instructions: string;
// }

// const RecipeList: React.FC = () => {
//     const [recipes, setRecipes] = useState<Recipe[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);

//     useEffect(() => {
//         const fetchRecipes = async () => {
//             try {
//                 const response = await fetch('http://localhost:3000/api/recipes');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const contentType = response.headers.get("content-type");
//                 if (contentType && contentType.includes("application/json")) {
//                     const data = await response.json();
//                     setRecipes(data);
//                 } else {
//                     throw new Error('Received non-JSON response');
//                 }
//             } catch (error: unknown) {
//                 if (error instanceof Error) {
//                     setError(error.message);
//                 } else {
//                     setError('An unknown error occurred');
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         };
        
//         fetchRecipes();
//     }, []);

//     const handleRecipeClick = (id: number) => {
//         setSelectedRecipeId(selectedRecipeId === id ? null : id);
//     };

//     return (
//         <div style={{ display: 'flex' }}>
//             <div style={{ flex: 1, padding: '20px', borderRight: '1px solid #ccc' }}>
//                 {selectedRecipeId !== null && (
//                     <div>
//                         {recipes.filter(recipe => recipe.id === selectedRecipeId).map(recipe => (
//                             <div key={recipe.id}>
//                                 <h2>{recipe.title}</h2>
//                                 <p><strong>Description:</strong> {recipe.description}</p>
//                                 <p><strong>Author ID:</strong> {recipe.authorId}</p>
//                                 <h4>Ingredients:</h4>
//                                 <ul>
//                                     {recipe.ingredients.map((ingredient, index) => (
//                                         <li key={index}>{ingredient}</li>
//                                     ))}
//                                 </ul>
//                                 <p><strong>Instructions:</strong> {recipe.instructions}</p>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//             <div style={{ flex: 1, padding: '20px' }}>
//                 <h1>Recipe List</h1>
//                 {loading && <p>Loading...</p>}
//                 {error && <p>Error: {error}</p>}
                
//                 <ul>
//                     {recipes.map((recipe) => (
//                         <li key={recipe.id} onClick={() => handleRecipeClick(recipe.id)} style={{ cursor: 'pointer' }}>
//                             <strong>{recipe.title}</strong>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default RecipeList;
