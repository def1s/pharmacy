import cls from './CartList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getCartList } from 'widgets/CartList/model/selectors/getCartList';
import { CartItem } from 'entities/CartItem/ui/CartItem';

interface CartListProps {
    className?: string
}

export const CartList = ({ className }: CartListProps) => {
	const cartList = useSelector(getCartList);

	const renderCartList = () => {
		return cartList.map((item, index) => {
			return <CartItem key={index} cartData={item}/>;
		});
	};

	const calculateCost = () => {
		return cartList.reduce((currentSum, currentNum) => {
			return currentSum + currentNum.cost;
		}, 0);
	};

	return (
		<div className={classNames(cls.CurtList, {}, [className])}>
			{renderCartList()}
			<div className={cls.cost}>СТОИМОСТЬ: {calculateCost()}</div>
		</div>
	);
};
