import cls from './DeleteFromCart.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch } from 'react-redux';
import { cartListActions } from 'widgets/CartList/model/slice/cartListSlice';

interface DeleteFromCartProps {
    className?: string;
	drugIndex: number;
}

export const DeleteFromCart = ({ className, drugIndex }: DeleteFromCartProps) => {
	const dispatch = useDispatch();

	const onClickDelete = () => {
		dispatch(cartListActions.onDeleteItem(drugIndex));
	};

	return (
		<button onClick={onClickDelete} className={classNames(cls.DeleteFromCart, {}, [className])}>
			УДАЛИТЬ
		</button>
	);
};
