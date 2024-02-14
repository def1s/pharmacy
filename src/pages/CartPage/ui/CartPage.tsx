import cls from './CartPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface CartPageProps {
    className?: string
}

export const CartPage = ({ className }: CartPageProps) => {

	return (
		<div className={classNames(cls.CartPage, {}, [className])}>

		</div>
	);
};
