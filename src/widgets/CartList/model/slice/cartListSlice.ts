import { createSlice } from '@reduxjs/toolkit';
import { CartListScheme } from 'widgets/CartList/model/types/cartListScheme';

const initialState: CartListScheme = {
	cartList: [
		// {
		// 	id:2,
		// 	title:'Антибактериальное мыло',
		// 	cover:'https://paper66.ru/image/product_foto/image/products_images_2/goods/600594/fd4eba9f18de261e3b0ffa331878e59b_xl.jpg',
		// 	cost:13245
		// }
	]
};

const cartListSlice = createSlice({
	name: 'cartList',
	initialState,
	reducers: {
		addItemToCart: (state, action) => {
			state.cartList.push(action.payload);
		},
		onDeleteItem: (state, action) => {
			state.cartList = state.cartList.filter(item => {
				return item.id !== action.payload;
			});
		},
		clearCart: (state) => {
			state.cartList = [];
		}
	}
});

export const { actions: cartListActions } = cartListSlice;
export const { reducer: cartListReducer } = cartListSlice;
