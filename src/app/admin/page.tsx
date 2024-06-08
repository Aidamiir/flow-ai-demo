import styles from './admin.module.scss';

import { Fragment } from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Demo App Template - Admin Panel',
};

export default function Admin() {
	return (
		<Fragment>
			<h1 className={styles.title}>Admin Page</h1>
		</Fragment>
	);
}
