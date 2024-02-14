import cls from './DrugGrid.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { MedicineCard } from 'entities/MedicineCard';
import { Spinner } from 'widgets/Spinner/ui/Spinner';
import { getDrugsList } from '../model/selectors/getDrugsList/getDrugsList';

interface DrugGridProps {
    className?: string;
	loading: boolean;
}

export const DrugGrid = ({ className, loading }: DrugGridProps) => { // пока беру только loading
	const drugsList = useSelector(getDrugsList);

	const renderDrugsList = () => {
		return drugsList.map(({ cover, title, cost, drug_id }, index) => {
			return <MedicineCard key={index} cover={cover} title={title} cost={cost} drug_id={drug_id}/>;
		});
	};

	const isLoading = loading ? <Spinner/> : null;
	const content = !loading ? renderDrugsList() : null;

	return (
		<div className={classNames(cls.DrugGrid, {}, [className])}>
			{ isLoading } {/* отображается только при загрузке данных с бекенда */}
			<div className={cls.DrugGrid__grid}>
				{ content } {/* отображается после полной загрузки данных */}
			</div>

		</div>
	);
};
