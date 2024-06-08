import '@/main.scss';

import React from 'react';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import { LazyLoadedChildren, Providers } from '@shared/ui';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Demo App Template',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="ru">
			<head>
				<link rel="icon" type="image/x-icon" href="/favicon.ico"/>
			</head>
			<body className={inter.className}>
				<Providers>
					<LazyLoadedChildren>{children}</LazyLoadedChildren>
				</Providers>
			</body>
		</html>
	);
}
