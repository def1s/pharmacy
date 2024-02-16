import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';
import { drugGridReducer } from 'widgets/DrugGrid';
import { categoriesListReducer } from 'widgets/CategoriesList';
import { drugDescriptionReducer } from 'entities/DrugDescription';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { cartListReducer } from 'widgets/CartList/model/slice/cartListSlice';
import { myOrdersReducer } from 'pages/MyOrders';

export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: {
			drugs: drugGridReducer,
			categories: categoriesListReducer,
			drugDescription: drugDescriptionReducer,
			user: userReducer,
			login: loginReducer,
			cart: cartListReducer,
			orders: myOrdersReducer
		},
		devTools: true, // use global variables!
		preloadedState: initialState
	});
}
