import styles from './home.module.scss';

import { Fragment } from 'react';

export default function Home() {
	return (
		<Fragment>
			<h1 className={styles.title}>Home Page</h1>
		</Fragment>
	);
}