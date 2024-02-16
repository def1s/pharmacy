import cls from './AddToCart.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { cartListActions } from 'widgets/CartList/model/slice/cartListSlice';
import { drugDescriptionSchema } from 'entities/DrugDescription';
import { useNavigate } from 'react-router-dom';
import { getUserAuthData } from 'entities/User';

interface AddToCartProps {
    className?: string;
	drugInfo: drugDescriptionSchema
}

export const AddToCart = ({ className, drugInfo }: AddToCartProps) => {
	const dispatch = useDispatch();
	const user = useSelector(getUserAuthData);
	const navigate = useNavigate();

	const onClickAdd = () => {
		if (!user) {
			navigate('/login');
		} else {
			dispatch(cartListActions.addItemToCart(drugInfo));
		}
	};

	return (
		<button onClick={onClickAdd} className={classNames(cls.AddToCart, {}, [className])}>
			В КОРЗИНУ
		</button>
	);
};
