import { StateSchema } from 'app/providers/StoreProvider';

export const getDrugsList = (state: StateSchema) => state.drugs.drugsList;
