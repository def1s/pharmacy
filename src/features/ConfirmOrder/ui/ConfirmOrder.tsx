import cls from './ConfirmOrder.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getCartList } from 'widgets/CartList/model/selectors/getCartList';
import { useHttp } from 'shared/hooks/useHttpHook/useHttpHook';
import { getUserAuthData } from 'entities/User';
import { cartListActions } from 'widgets/CartList/model/slice/cartListSlice';

interface ConfirmOrderProps {
    className?: string
}

export const ConfirmOrder = ({ className }: ConfirmOrderProps) => {
	const cart = useSelector(getCartList);
	const user = useSelector(getUserAuthData);
	const dispatch = useDispatch();
	const { request } = useHttp();

	const onConfirmOrder = () => {
		const code = Math.floor(Math.random() * 10000) + 1;

		const data = {
			items: cart.map(item => {
				return item.title;
			}).join(' '),
			user_id: user.user_id,
			code
		};

		request({ url: '/api/add-orders', method: 'POST', body: JSON.stringify(data) })
			.then(res => console.log(res))
			.catch(error => console.log(error));

		dispatch(cartListActions.clearCart());
	};

	return (
		<button disabled={!cart.length} onClick={onConfirmOrder} className={classNames(cls.ConfirmOrder, {}, [className])}>
			ПОДТВЕРДИТЬ
		</button>
	);
};
