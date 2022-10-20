import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Overview, Feed } from '@client/modules/pages';
const Lazy = React.lazy(() => import(/* webpackChunkName: "LazyChunk" */ '@client/modules/pages/Lazy/Lazy'));

const Routes: React.FC = () => {
	const AppRoutes =  useRoutes(
		[
			{path: '/', element: <Feed />},
			{path: '/lazy', element: <Lazy />},
			{path: '/overview', element: <Overview.component />},
		],
	);
	return (
		<Suspense fallback="Loading...">
			{AppRoutes}
		</Suspense>
	);
};

export default Routes;