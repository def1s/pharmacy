import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getUsername } from 'features/AuthByUsername/model/selectors/getUsername';
import React from 'react';
import { getPassword } from 'features/AuthByUsername/model/selectors/getPassword';
import { useHttp } from 'shared/hooks/useHttpHook/useHttpHook';
import Cookies from 'js-cookie';
import { userActions } from 'entities/User/model/slice/userSlice';
import { User } from 'entities/User/model/types/user';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const dispatch = useDispatch();
	const username = useSelector(getUsername);
	const password = useSelector(getPassword); // небезопасно, переписать
	const { request } = useHttp();

	const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(loginActions.setUsername(event.target.value));
	};

	const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(loginActions.setPassword(event.target.value));
	};

	const onLoginClick = async (e: React.FormEvent) => {
		e.preventDefault();
		// setErrorMessage('');
		const data = {
			username: username,
			password: password
		};

		const JsonData = JSON.stringify(data);

		request({ url: '/auth/login', headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JsonData })
			.then(res => {
				if (res.token) {
					Cookies.set('jwtToken', res.token, { expires: 1 });
					const authData: User  = {
						user_id: res.user_id,
						username: res.username,
						avatar: res.avatar
					};
					dispatch(userActions.setAuthData(authData));
				}
			})
			.catch(error => console.log(error));

		// login('/auth/login', JSON.stringify(data))
		// 	.then(res => {
		// 		if (res.token) {
		// 			Cookies.set('jwtToken', res.token, { expires: 1 });
		// 			dispatch(setIsAuth(true));
		//
		// 			const previousPath = localStorage.getItem('previousPath');
		// 			if (previousPath) {
		// 				navigate(previousPath);
		// 				localStorage.removeItem('previousPath');
		// 			} else {
		// 				navigate('/');
		// 			}
		// 		}
		// 	})
		// 	.catch(error => {
		// 		setErrorMessage(error.message);
		// 		console.log(error);
		// 	});
	};

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<form onSubmit={onLoginClick}>
				<input
					type="text"
					name='username'
					placeholder='Введите имя пользователя'
					onChange={onChangeUsername}
					value={username}
				/>

				<input
					type='password'
					name='password'
					placeholder='Введите пароль'
					onChange={onChangePassword}
					value={password}
				/>

				<button>ВОЙТИ</button>
			</form>
		</div>
	);
};
