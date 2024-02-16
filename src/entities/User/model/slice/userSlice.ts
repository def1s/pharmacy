import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema, User } from '../types/user';
import Cookies from 'js-cookie';

const initialState: UserSchema = {
	_inited: false
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
		},
		initAuthData: (state) => {
			state._inited = true;
		},
		logout: (state) => {
			Cookies.remove('jwtToken');
			state.authData = undefined;
		},
	},
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
