import { DrugDescription } from './ui/DrugDescription';
import { drugDescriptionSlice } from './model/slice/drugDescriptionSlice';
import { drugDescriptionReducer } from './model/slice/drugDescriptionSlice';
import type { drugDescriptionSchema } from './model/types/drugDescriptionSchema';

export {
	DrugDescription,
	drugDescriptionReducer,
	drugDescriptionSlice,
	drugDescriptionSchema
};
