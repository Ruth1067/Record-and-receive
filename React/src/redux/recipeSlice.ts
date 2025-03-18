import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Recipe {
  id: string;
  title: string;
  details: string;
}

interface RecipeState {
  recipes: Recipe[];
}

const initialState: RecipeState = { recipes: [] };

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    
setRecipes(state: { recipes: any; }, action: PayloadAction<Recipe[]>) {
      state.recipes = action.payload;
    },
    addRecipe(state: { recipes: any[]; }, action: PayloadAction<Recipe>) {
      state.recipes.push(action.payload);
    },
  },
});
   
export const { setRecipes, addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;

