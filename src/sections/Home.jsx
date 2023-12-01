import React from 'react';
import classNames from 'classnames';
import styles from './Home.module.scss';
import btnStyles from '../common/styles/_buttons.scss';
import fontStyles from '../common/styles/_typography.scss';

const Home = () => {
	return (
		<section className={classNames(styles.hero, 'jumbotron')}>
			<div className="container">
				<h1 className={classNames(styles.heroTitle, styles.loadHidden)}>
					Hi, my name is <span className="textColorMain">Hoora Mirsanei</span>
					<br />
					I'm a Full-Stack Developer.
				</h1>
				<p className={classNames(styles.heroCta, styles.loadHidden)}>
					<a rel="noreferrer" className="ctaBtn ctaBtnHero" href="#about">
						Hire me!
					</a>
				</p>
			</div>
		</section>
	);
};

export default Home;
