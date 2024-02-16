import { myOrdersActions } from 'pages/MyOrders/model/slice/myOrdersSlice';
import { myOrdersReducer } from 'pages/MyOrders/model/slice/myOrdersSlice';
import { MyOrders } from 'pages/MyOrders/ui/MyOrders';
import { getOrdersList } from 'pages/MyOrders/model/selectors/getOrdersList';

export {
	myOrdersActions,
	myOrdersReducer,
	MyOrders,
	getOrdersList
};
