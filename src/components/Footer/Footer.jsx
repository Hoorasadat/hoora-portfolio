import React from 'react';
import { Link } from 'react-scroll';
import classNames from 'classnames';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={classNames(styles.footer, 'navbar-static-bottom')}>
			<div className="container">
				<Link
					className={styles.backToTop}
					rel="noreferrer"
					to="home"
					smooth={true}
					duration={500}
					offset={-150}
				>
					<i className="fa fa-angle-double-up fa-3x" aria-hidden="true"></i>
				</Link>

				<hr />

				<p className={styles.footer__text}>
					Copyright © 2023 All rights reserved
					<a rel="noreferrer" href="https://www.linkedin.com/in/hoora-mirsanei/" target="_blank">
						&nbsp;Hoora Mirsanei
					</a>
				</p>

			</div>
	    </footer>
	);
};

export default Footer;
