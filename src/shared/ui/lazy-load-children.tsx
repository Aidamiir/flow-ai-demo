import React, { Suspense } from 'react';

export const LazyLoadedChildren = ({ children }: { children: React.ReactNode }) => (
	<Suspense fallback={<div>Loading...</div>}>
		{children}
	</Suspense>
);