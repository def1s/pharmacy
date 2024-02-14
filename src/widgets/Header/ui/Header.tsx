import cls from './Header.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { UserProfile } from 'entities/UserProfile/ui/UserProfile';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
	const user = useSelector(getUserAuthData);

	return (
		<div className={classNames(cls.Header, {}, [className])}>
			<div className={cls.wrapper}>
				<Link to={RoutePath.main} className={cls.link}>ГЛАВНАЯ</Link>
				<Link to={RoutePath.medicine_catalog} className={cls.link}>КАТАЛОГ</Link>
			</div>

			{
				user ? <UserProfile avatar={user.avatar} username={user.username}/> : null
			}
		</div>
	);
};
