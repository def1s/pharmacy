import { createSlice } from '@reduxjs/toolkit';
import { drugGridSchema } from 'widgets/DrugGrid/model/types/drugGridSchema';

const initialState: drugGridSchema = {
	drugsList: [],
	categoryName: ''
};

export const drugGridSlice = createSlice({
	name: 'drugGrid',
	initialState,
	reducers: {
		fetchingDrugsList: (state, action) => {
			state.drugsList = action.payload;
		}
	}
});

export const { actions: drugGridActions } = drugGridSlice;
export const { reducer: drugGridReducer } = drugGridSlice;
