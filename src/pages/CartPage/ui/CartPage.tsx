import cls from './CartPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { CartList } from 'widgets/CartList/ui/CartList';
import { ConfirmOrder } from 'features/ConfirmOrder';

interface CartPageProps {
    className?: string
}

export const CartPage = ({ className }: CartPageProps) => {

	return (
		<div className={classNames(cls.CartPage, {}, ['container'])}>
			<CartList/>
			<ConfirmOrder/>
		</div>
	);
};
