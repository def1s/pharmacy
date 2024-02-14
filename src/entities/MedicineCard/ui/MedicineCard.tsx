import cls from './MedicineCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';

interface MedicineCardProps {
    className?: string;
	cover: string;
	title: string;
	cost: number;
	drug_id: number;
}

export const MedicineCard = ({ className, cover, title, cost, drug_id }: MedicineCardProps) => {

	return (
		<Link to={`/drugs/${drug_id}`} className={classNames(cls.MedicineCard, {}, [className])}>
			<div className={cls.MedicineCard__cover}>
				<div className={cls.MedicineCard__image} style={{ backgroundImage: cover }}></div> {/*исправить*/}
			</div>

			<div className={cls.MedicineCard__title}>{title}</div>

			<div className={cls.MedicineCard__wrapper}>
				<div className={cls.MedicineCard__cost}>{cost}</div>
				<div className={cls.MedicineCard__tempClass}>BUY</div>
			</div>
		</Link>
	);
};
