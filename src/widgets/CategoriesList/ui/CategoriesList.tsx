import cls from './CategoriesList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesList } from '../model/selectors/getCategoriesList';
import { useEffect } from 'react';
import { useHttp } from 'shared/hooks/useHttpHook/useHttpHook';
import { categoriesListActions } from 'widgets/CategoriesList/model/slice/categoriesListSlice';
import { CatalogHeader } from 'entities/CatalogHeader';
import { Spinner } from 'widgets/Spinner/ui/Spinner';

interface CategoriesListProps {
    className?: string
}

export const CategoriesList = ({ className }: CategoriesListProps) => {
	const dispatch = useDispatch();
	const { request, loading } = useHttp();
	const categoriesList = useSelector(getCategoriesList);

	useEffect(() => {
		request({ url: '/api/all-categories' })
			.then(res => dispatch(categoriesListActions.fetchingCategoriesList(res.data)))
			.catch(error => console.log(error));
	}, []);

	const renderCategoriesList = () => {
		return categoriesList.map(({ category_id, title, icon }) => {
			return <CatalogHeader key={category_id} category_id={category_id} title={title} icon={icon}/>;
		});
	};

	const isLoading = loading ? <Spinner/> : null;
	const content = !loading ? renderCategoriesList() : null;

	return (
		<div className={classNames(cls.CategoriesList, {}, [className])}>
			{isLoading}
			{content}
		</div>
	);
};
