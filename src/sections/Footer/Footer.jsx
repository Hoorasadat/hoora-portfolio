import React from 'react';
import classNames from 'classnames';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={classNames(styles.footer, 'navbar-static-bottom')}>
			<div className="container">
				<a rel="noreferrer" href="#top" className={styles.backToTop}>
					<i className="fa fa-angle-double-up fa-3x" aria-hidden="true"></i>
				</a>
				<div className={styles.socialLinks}>
				</div>

				<hr />

				<p className={styles.footer__text}>
					Copyright © 2023 All rights reserved
					<a rel="noreferrer" href="#" target="_blank">
						&nbsp;Hoora Mirsanei
					</a>
				</p>

			</div>
	    </footer>
	);
};

export default Footer;
