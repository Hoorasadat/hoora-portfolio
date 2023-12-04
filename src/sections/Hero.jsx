import React from 'react';
import { Link } from 'react-scroll';
import classNames from 'classnames';
import styles from './Hero.module.scss';
import btnStyles from '../common/styles/_buttons.scss';
import fontStyles from '../common/styles/_typography.scss';

const Hero = () => {
	return (
		<section className={classNames(styles.hero, 'jumbotron')}>
			<div className="container">
				<h1 className={classNames(styles.heroTitle, styles.loadHidden)}>
					<span className="textColorMain">Hoora Mirsanei</span>
					<br />
					Full-Stack Software Developer
				</h1>
				<p className={classNames(styles.heroCta, styles.loadHidden)}>
					<Link rel="noreferrer" to="about" className="ctaBtn ctaBtnHero" smooth={true} duration={500} >
						More about me!
					</Link>
				</p>
			</div>
		</section>
	);
};

export default Hero;
