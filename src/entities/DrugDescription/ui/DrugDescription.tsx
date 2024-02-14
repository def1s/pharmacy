import cls from './DrugDescription.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { drugDescriptionSchema } from '../model/types/drugDescriptionSchema';

interface DrugDescriptionProps {
    className?: string;
	data: drugDescriptionSchema;
}

export const DrugDescription = ({ className, data }: DrugDescriptionProps) => {
	const { cover, title, cost } = data;

	return (
		<div className={classNames(cls.DrugDescription, {}, [className])}>
			<div className={cls.content}>
				<div className={cls.cover}>
					<img src={cover} alt="drug cover"/>
				</div>

				<div className={cls.wrapper}>
					<div className={cls.title}>{title}</div>
					<div className={cls.cost}>{cost}</div>
				</div>
			</div>
		</div>
	);
};
