import cls from './OrderItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { OrderItemScheme } from 'entities/OrderItem/model/types/orderItemScheme';

interface OrderItemProps {
    className?: string,
	orderItemData: OrderItemScheme;
}

export const OrderItem = ({ className, orderItemData }: OrderItemProps) => {
	const { code, items,  } = orderItemData;

	return (
		<div className={classNames(cls.OrderItem, {}, [className])}>
			Номер заказа: {code}. Товары: {items}
		</div>
	);
};
