import cls from './Spinner.module.scss';
import spinner from '../../../shared/assets/spinner.gif';

export const Spinner = () => {

	return (
		<img className={cls.Spinner} alt={'spinner loading'} src={spinner}/>
	);
};
