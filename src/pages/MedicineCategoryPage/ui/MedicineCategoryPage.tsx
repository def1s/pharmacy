import cls from './MedicineCategoryPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { DrugGrid } from 'widgets/DrugGrid';

interface MedicineCategoryPageProps {
    className?: string
}

export const MedicineCategoryPage = ({ className }: MedicineCategoryPageProps) => {

	return (
		<div className={classNames(cls.MedicineCategoryPage, {}, ['container'])}>
			<DrugGrid/>
		</div>
	);
};
