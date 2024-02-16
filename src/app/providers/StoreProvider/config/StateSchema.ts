import { drugGridSchema } from 'widgets/DrugGrid';
import { categoriesListSchema } from 'widgets/CategoriesList';
import { drugDescriptionSchema } from 'entities/DrugDescription';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { CartScheme } from 'entities/CartItem';
import { CartListScheme } from 'widgets/CartList/model/types/cartListScheme';
import { MyOrdersScheme } from 'pages/MyOrders/model/types/myOrdersScheme';


export interface StateSchema {
	drugs: drugGridSchema;
	categories: categoriesListSchema;
	drugDescription: drugDescriptionSchema;
	user: UserSchema;
	login: LoginSchema;
	cart: CartListScheme;
	orders: MyOrdersScheme;
}
