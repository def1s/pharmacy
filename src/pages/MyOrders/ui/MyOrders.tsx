import cls from './MyOrders.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect } from 'react';
import { useHttp } from 'shared/hooks/useHttpHook/useHttpHook';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getOrdersList, myOrdersActions } from 'pages/MyOrders';
import { OrderItem } from 'entities/OrderItem/ui/OrderItem';

interface MyOrdersProps {
    className?: string
}

export const MyOrders = ({ className }: MyOrdersProps) => {
	const { request } = useHttp();
	const dispatch = useDispatch();
	const user = useSelector(getUserAuthData);
	const orders = useSelector(getOrdersList);

	useEffect(() => {
		request({ url: '/api/by-user-orders/' + user.user_id })
			.then(res => dispatch(myOrdersActions.fetchingOrdersList(res.data)))
			.catch(error => console.log(error));
	}, [user, dispatch]);

	const renderOrders = () => {
		return orders.map((order, index) => {
			return <OrderItem key={index} orderItemData={order}/>;
		});
	};

	return (
		<div className={classNames(cls.MyOrders, {}, [className])}>
			{renderOrders()}
		</div>
	);
};
