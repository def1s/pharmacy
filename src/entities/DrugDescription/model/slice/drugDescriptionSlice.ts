import { createSlice } from '@reduxjs/toolkit';
import { drugDescriptionSchema } from '../types/drugDescriptionSchema';

const initialState: drugDescriptionSchema = {
	cover: '',
	cost: 0,
	title: ''
};

export const drugDescriptionSlice = createSlice({
	name: 'drugDescription',
	initialState,
	reducers: {
		fetchingDrugDescription: (state, action) => {
			state.cover = action.payload.cover;
			state.cost = action.payload.cost;
			state.title = action.payload.title;
		}
	}
});

export const { actions: drugDescriptionActions } = drugDescriptionSlice;
export const { reducer: drugDescriptionReducer } = drugDescriptionSlice;
