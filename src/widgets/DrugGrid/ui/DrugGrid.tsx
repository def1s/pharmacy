import cls from './DrugGrid.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHttp } from 'shared/hooks/useHttpHook/useHttpHook';
import { drugGridActions } from 'widgets/DrugGrid/model/slice/drugGridSlice';
import { getDrugsList } from 'widgets/DrugGrid/model/selectors/getDrugsList/getDrugsList';
import { MedicineCard } from 'entities/MedicineCard';
import { Spinner } from 'widgets/Spinner/ui/Spinner';

interface DrugGridProps {
    className?: string
}

export const DrugGrid = ({ className }: DrugGridProps) => {
	const dispatch = useDispatch();
	const drugsList = useSelector(getDrugsList);
	const { request, loading } = useHttp(); // пока что не беру error

	useEffect(() => {
		request({ url: '/api/all-drugs' })
			.then(res => dispatch(drugGridActions.fetchingDrugsList(res.data)))
			.catch(error => console.log(error));
	}, []);

	const renderDrugsList = () => {
		return drugsList.map(({ cover, title, cost }, index) => {
			return <MedicineCard key={index} cover={cover} title={title} cost={cost}/>;
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
