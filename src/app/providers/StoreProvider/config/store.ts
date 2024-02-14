import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';
import { drugGridReducer } from 'widgets/DrugGrid';
import { categoriesListReducer } from 'widgets/CategoriesList';
import { drugDescriptionReducer } from 'entities/DrugDescription';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: {
			drugs: drugGridReducer,
			categories: categoriesListReducer,
			drugDescription: drugDescriptionReducer,
			user: userReducer,
			login: loginReducer
		},
		devTools: true, // use global variables!
		preloadedState: initialState
	});
}
