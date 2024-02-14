import cls from './DrugPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useHttp } from 'shared/hooks/useHttpHook/useHttpHook';
import { useDispatch, useSelector } from 'react-redux';
import { drugDescriptionActions } from 'entities/DrugDescription/model/slice/drugDescriptionSlice';
import { getDrugDescription } from 'entities/DrugDescription/model/selectors/getDrugDescription';
import { DrugDescription } from 'entities/DrugDescription';

interface DrugPageProps {
    className?: string
}

export const DrugPage = ({ className }: DrugPageProps) => {
	const { drugId } = useParams();
	const dispatch = useDispatch();
	const { request } = useHttp(); // пока без loading и error
	const drugDescription = useSelector(getDrugDescription);

	useEffect(() => {
		request({ url: `/api/one-drug/${drugId}` })
			.then(res => dispatch(drugDescriptionActions.fetchingDrugDescription(res.data)))
			.catch(error => console.log(error));
	}, [drugId]);

	return (
		<div className={classNames(cls.DrugPage, {}, [className])}>
			<DrugDescription data={drugDescription}/>
		</div>
	);
};
