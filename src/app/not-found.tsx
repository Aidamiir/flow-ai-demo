import styles from './not-found.module.scss';

import { Fragment } from 'react';
import Link from 'next/link';

import { ROUTER_MAP } from '@shared/constants';

export default function NotFound() {
	return (
		<Fragment>
			<h1 className={styles.title}>Страница не найдена</h1>
			<Link href={ROUTER_MAP.home} className={styles.link}>Вернуться на главную</Link>
		</Fragment>
	);
}
