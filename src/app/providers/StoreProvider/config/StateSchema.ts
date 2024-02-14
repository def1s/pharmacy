import { drugGridSchema } from 'widgets/DrugGrid';
import { categoriesListSchema } from 'widgets/CategoriesList';
import { drugDescriptionSchema } from 'entities/DrugDescription';


export interface StateSchema {
	drugs: drugGridSchema,
	categories: categoriesListSchema
	drugDescription: drugDescriptionSchema
}
