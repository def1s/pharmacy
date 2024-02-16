import cls from './CartItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { CartScheme } from 'entities/CartItem/model/types/cartScheme';
import { DeleteFromCart } from 'features/DeleteFromCart/ui/DeleteFromCart';

interface CartItemProps {
    className?: string;
	cartData: CartScheme;
}

export const CartItem = ({ className, cartData }: CartItemProps) => {
	const { cover, title, cost, id } = cartData;

	return (
		<div className={classNames(cls.CartItem, {}, [className])}>
			<img src={cover} alt="cart item cover" className={cls.cover}/>
			<div className={cls.title}>{title}</div>
			<div className={cls.cost}>{cost}₽</div>
			<DeleteFromCart drugIndex={id}/>
		</div>
	);
};
