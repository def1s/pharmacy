import { MyOrdersScheme } from 'pages/MyOrders/model/types/myOrdersScheme';
import { createSlice } from '@reduxjs/toolkit';


const initialState: MyOrdersScheme = {
	ordersList: []
};

const myOrdersSlice = createSlice({
	name: 'myOrders',
	initialState,
	reducers: {
		fetchingOrdersList: (state, actions) => {
			state.ordersList = actions.payload;
		}
	}
});

export const { actions: myOrdersActions } = myOrdersSlice;
export const { reducer: myOrdersReducer } = myOrdersSlice;
