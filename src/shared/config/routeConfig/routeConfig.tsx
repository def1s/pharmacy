import { type RouteProps } from 'react-router-dom';
import MainPage from 'pages/MainPage/ui/MainPage';
import MedicineCatalogPage from 'pages/MedicineCatalogPage/ui/MedicineCatalogPage';
import { MedicineCategoryPage } from 'pages/MedicineCategoryPage';
import { DrugPage } from 'pages/DrugPage';

export enum AppRoutes {
	MAIN = 'main',
	MEDICINE_CATALOG = 'medicine_catalog',
	MEDICINE_CATEGORY = 'medicine_category',
	DRUG_PAGE = 'drug_card'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.MEDICINE_CATALOG]: '/medicine-catalog',
	[AppRoutes.MEDICINE_CATEGORY]: '/medicine-catalog/:categoryId',
	[AppRoutes.DRUG_PAGE]: '/drugs/:drugId'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage/>
	},
	[AppRoutes.MEDICINE_CATALOG]: {
		path: RoutePath.medicine_catalog,
		element: <MedicineCatalogPage/>
	},
	[AppRoutes.MEDICINE_CATEGORY]: {
		path: RoutePath.medicine_category,
		element: <MedicineCategoryPage/>
	},
	[AppRoutes.DRUG_PAGE]: {
		path: RoutePath.drug_card,
		element: <DrugPage/>
	}
};
