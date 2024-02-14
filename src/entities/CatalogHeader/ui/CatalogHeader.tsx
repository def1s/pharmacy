import { FC } from 'react';
import cls from './CatalogHeader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { catalogHeaderSchema } from '../model/types/catalogHeaderSchema';
import { Link } from 'react-router-dom';

const CatalogHeader: FC<catalogHeaderSchema> = ({ category_id, title, icon }) => {
	return (
		<Link to={`/medicine-catalog/${category_id}`} className={classNames(cls.catalogHeader)}>
			<img className={classNames(cls.catalogHeader__icon)} src={icon} alt='catalog-icon'/>
			<div className={classNames(cls.catalogHeader__title)}>{title}</div>
		</Link>
	);
};

export default CatalogHeader;
