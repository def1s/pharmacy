import { createSlice } from '@reduxjs/toolkit';
import { categoriesListSchema } from '../types/categoriesListSchema';

const initialState: categoriesListSchema = {
	categoriesList: []
};

export const categoriesListSlice = createSlice({
	name: 'categoriesList',
	initialState,
	reducers: {
		fetchingCategoriesList: (state, actions) => {
			state.categoriesList = actions.payload;
		}
	}
});

export const { actions: categoriesListActions } = categoriesListSlice;
export const { reducer: categoriesListReducer } = categoriesListSlice;
