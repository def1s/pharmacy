import { StateSchema } from 'app/providers/StoreProvider';

export const getOrdersList = (state: StateSchema) => state.orders.ordersList;
