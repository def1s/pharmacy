import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Spinner } from 'widgets/Spinner/ui/Spinner';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = (
			<Suspense fallback={<Spinner />}>
				<div className="page-wrapper">
					{route.element}
				</div>
			</Suspense>
		);
		return (
			<Route
				key={route.path}
				path={route.path}
				element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
			/>
		);
	}, []);

	return (
		<Routes>
			{Object.values(routeConfig).map(renderWithWrapper)}
		</Routes>
	);


	// return (
	// 	<Suspense fallback={<div>Loading</div>}>
	// 		<Routes>
	// 			{Object.values(routeConfig).map(({ element, path }) => (
	// 				<Route
	// 					key={path}
	// 					path={path}
	// 					element={(
	// 						<div className="page-wrapper">
	// 							{element}
	// 						</div>
	// 					)}
	// 				/>
	// 			))}
	// 		</Routes>
	// 	</Suspense>
	// );
};

export default AppRouter;
