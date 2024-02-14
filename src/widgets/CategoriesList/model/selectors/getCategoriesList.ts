import { StateSchema } from 'app/providers/StoreProvider';

export const getCategoriesList = (state: StateSchema) => state.categories.categoriesList;
