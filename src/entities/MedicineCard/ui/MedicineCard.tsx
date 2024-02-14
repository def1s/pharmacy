import cls from './MedicineCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface MedicineCardProps {
    className?: string;
	cover: string;
	title: string;
	cost: number;
}

export const MedicineCard = ({ className, cover, title, cost }: MedicineCardProps) => {

	return (
		<div className={classNames(cls.MedicineCard, {}, [className])}>
			<div className={cls.MedicineCard__cover}>
				<div className={cls.MedicineCard__image} style={{ backgroundImage: cover }}></div> {/*исправить*/}
			</div>

			<div className={cls.MedicineCard__title}>{title}</div>

			<div className={cls.MedicineCard__wrapper}>
				<div className={cls.MedicineCard__cost}>{cost}</div>
				<div className={cls.MedicineCard__tempClass}>BUY</div>
			</div>
		</div>
	);
};
