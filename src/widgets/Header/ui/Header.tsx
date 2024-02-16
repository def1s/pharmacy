import cls from './Header.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { UserProfile } from 'entities/UserProfile/ui/UserProfile';
import { useEffect } from 'react';
import { userActions } from 'entities/User/model/slice/userSlice';
import Cookies from 'js-cookie';
import useAuthCheck from 'shared/hooks/useAuthCheckHook/useAuthCheckHook';
import cartIcon from '../../../shared/assets/cart.png';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
	const user = useSelector(getUserAuthData);
	const token = Cookies.get('jwtToken');
	const dispatch = useDispatch();
	const { checkAuth } = useAuthCheck();

	useEffect(() => {
		checkAuth(token);
	}, []);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	if (!user) {
		return (
			<div className={classNames(cls.Header, {}, [className])}>
				<div className={cls.wrapper}>
					<Link to={RoutePath.main} className={cls.link}>ГЛАВНАЯ</Link>
					<Link to={RoutePath.medicine_catalog} className={cls.link}>КАТАЛОГ</Link>
				</div>

				<Link to={'/login'} className={cls.user}>ВХОД</Link>
			</div>
		);
	}

	return (
		<div className={classNames(cls.Header, {}, [className])}>
			<div className={cls.wrapper}>
				<Link to={RoutePath.main} className={cls.link}>ГЛАВНАЯ</Link>
				<Link to={RoutePath.medicine_catalog} className={cls.link}>КАТАЛОГ</Link>
				<Link to={RoutePath.orders} className={cls.link}>МОИ ЗАКАЗЫ</Link>
			</div>

			<div className={cls.user}>
				<Link to={RoutePath.cart}>
					<img src={cartIcon} alt="cart icon" className={cls.cartIcon}/>
				</Link>

				<UserProfile avatar={user.avatar} username={user.username}/>
				<button onClick={() => dispatch(userActions.logout())}>ВЫЙТИ</button>
			</div>

		</div>
	);
};
