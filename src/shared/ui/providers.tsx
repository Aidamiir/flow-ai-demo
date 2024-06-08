'use client';

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Tooltip } from 'react-tooltip';
import { ToastContainer } from 'react-toastify';

import { store } from '@shared/store';

export const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	useEffect(() => {
		const html = document.documentElement;
		const value = (window.innerWidth - document.body.clientWidth) / 16 + 'rem';

		html.classList.add('loaded');
		html.style.setProperty('--dat-scrollbar-width', value);
	}, []);

	return (
		<>
			<Provider store={store}>{children}</Provider>
			<Tooltip id="app-tooltip" className="tooltip-container"/>
			<ToastContainer autoClose={3000} position="top-right"/>
		</>
	);
};
