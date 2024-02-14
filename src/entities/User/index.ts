import { userReducer } from './model/slice/userSlice';
import { UserSchema } from './model/types/user';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData';

export {
	userReducer,
	UserSchema,
	getUserAuthData
};
