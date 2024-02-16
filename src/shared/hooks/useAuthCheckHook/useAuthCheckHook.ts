import { useDispatch } from 'react-redux';
import { useHttp } from 'shared/hooks/useHttpHook/useHttpHook';
import { userActions } from 'entities/User/model/slice/userSlice';

const useAuthCheck = () => {
	const dispatch = useDispatch();
	const { request } = useHttp();

	const checkAuth = (token: string) => {
		request({ url: '/auth/check', headers: { Authorization: `Bearer ${token}` }, method: 'POST' })
			.then(res => {
				if (!res.permission) {
					dispatch(userActions.logout());
				} else {
					const authData = {
						user_id: res.data.user_id,
						username: res.data.username,
						avatar: res.data.avatar
					};
					dispatch(userActions.setAuthData(authData));
				}
			})
			.catch(error => console.log(error));
	};

	return { checkAuth };
};

export default useAuthCheck;
