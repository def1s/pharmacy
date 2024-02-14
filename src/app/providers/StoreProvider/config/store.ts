import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';
import { drugGridReducer } from 'widgets/DrugGrid';
import { categoriesListReducer } from 'widgets/CategoriesList';
import { drugDescriptionReducer } from 'entities/DrugDescription';

export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: {
			drugs: drugGridReducer,
			categories: categoriesListReducer,
			drugDescription: drugDescriptionReducer
		},
		devTools: true, // use global variables!
		preloadedState: initialState
	});
}
