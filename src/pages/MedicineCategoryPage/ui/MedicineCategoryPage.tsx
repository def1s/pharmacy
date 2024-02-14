import cls from './MedicineCategoryPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { DrugGrid } from 'widgets/DrugGrid';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHttp } from 'shared/hooks/useHttpHook/useHttpHook';
import { useEffect } from 'react';
import { drugGridActions } from 'widgets/DrugGrid';

interface MedicineCategoryPageProps {
    className?: string
}

export const MedicineCategoryPage = ({ className }: MedicineCategoryPageProps) => {
	const { categoryId } = useParams();
	const dispatch = useDispatch();
	const { request, loading } = useHttp(); // пока без error

	useEffect(() => {
		request({ url: `/api/by-category-drugs/${categoryId}` })
			.then(res => dispatch(drugGridActions.fetchingDrugsList(res.data)))
			.catch(error => console.log(error));
	}, [categoryId]);

	return (
		<div className={classNames(cls.MedicineCategoryPage, {}, ['container'])}>
			<DrugGrid loading={loading}/>
		</div>
	);
};
