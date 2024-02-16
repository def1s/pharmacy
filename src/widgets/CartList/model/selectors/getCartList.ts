import { StateSchema } from 'app/providers/StoreProvider';

export const getCartList = (state: StateSchema) => state.cart.cartList;
