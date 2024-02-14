import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';
import { createSlice } from '@reduxjs/toolkit';
import { drugGridSlice } from 'widgets/DrugGrid/model/slice/drugGridSlice';


const initialState: LoginSchema = {
	username: '',
	password: ''
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state, action) => {
			state.username = action.payload;
		},
		setPassword: (state, action) => {
			state.password = action.payload;
		}
	}
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
