import { drugGridSchema } from 'widgets/DrugGrid';
import { categoriesListSchema } from 'widgets/CategoriesList';
import { drugDescriptionSchema } from 'entities/DrugDescription';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';


export interface StateSchema {
	drugs: drugGridSchema;
	categories: categoriesListSchema;
	drugDescription: drugDescriptionSchema;
	user: UserSchema;
	login: LoginSchema;
}
