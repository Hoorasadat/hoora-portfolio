import React from 'react';
import { Link } from 'react-scroll';
import classNames from 'classnames';
import styles from './Hero.module.scss';
import heroImage from '../../assets/heroImage.jpeg'

const Hero = () => {
	return (
		<section className={classNames(styles.hero, "jumbotron", "d-flex", "col-md")}>
			<div className="col-md-6">
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

			<div className="col-md-6">
				<img
					className="rounded-circle img-fluid"
					src={heroImage}
					alt="Unknown"
				/>
			</div>
		</section>
	);
};

export default Hero;
