import cls from './DrugCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { DrugDescription } from 'entities/DrugDescription/ui/DrugDescription';

interface DrugCardProps {
    className?: string
}

// СНЕСТИ ИЛИ ДОРАБОТАТЬ
// СНЕСТИ ИЛИ ДОРАБОТАТЬ
// СНЕСТИ ИЛИ ДОРАБОТАТЬ
// СНЕСТИ ИЛИ ДОРАБОТАТЬ
// СНЕСТИ ИЛИ ДОРАБОТАТЬ
// СНЕСТИ ИЛИ ДОРАБОТАТЬ
// СНЕСТИ ИЛИ ДОРАБОТАТЬ

export const DrugCard = ({ className }: DrugCardProps) => {

	return (
		<div className={classNames(cls.DrugCard, {}, [className])}>
			{/*<DrugDescription data={data}/>*/}
		</div>
	);
};
