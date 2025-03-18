import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './recipeSlice';

const store = configureStore({
  reducer: {  
  
recipes: recipeReducer,
  },
});

export default store;
