import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { CategoriesList } from 'widgets/CategoriesList';

const MedicineCatalogPage = () => {

	return (
		<div className={classNames('container')}>
			<CategoriesList/>
		</div>
	);
};

export default MedicineCatalogPage;
