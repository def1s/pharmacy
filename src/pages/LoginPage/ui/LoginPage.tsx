import cls from './LoginPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm';

interface LoginPageProps {
    className?: string
}

export const LoginPage = ({ className }: LoginPageProps) => {

	return (
		<div className={classNames(cls.LoginPage, {}, [className])}>
			<LoginForm/>
		</div>
	);
};
