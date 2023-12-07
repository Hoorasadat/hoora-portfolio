import React from 'react';
import { Link } from 'react-scroll';
import classNames from 'classnames';
import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<section className={classNames(styles.hero, 'jumbotron')}>
			<div className="container">
				<p className={classNames(styles.heroTitle, styles.loadHidden, "textColorMain")}>
					Hoora Mirsanei
				</p>

				<p className={classNames(styles.heroPosition, styles.loadHidden)}>
					Full-Stack Software Developer
				</p>

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
