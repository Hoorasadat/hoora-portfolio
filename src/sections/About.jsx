import React from 'react';
import classNames from 'classnames';
import styles from './About.module.scss';
// import btnStyles from '../common/styles/_buttons.scss';
import '../common/styles/_sections.scss';
import profileImage from '../assets/profile.jpg';
import resumePdf from '../assets/resume.pdf';

const About = () => {
	return (
		<section id="about" className={styles.about}>
			<div className="container">
				<h2 className={classNames(styles.loadHidden, 'sectionTitle')}>About me</h2>
				<div className={classNames(styles.aboutWrapper, 'row')}>
					<div className="col-md-6 col-sm-12">
						<div className={classNames(styles.aboutWrapper__image, styles.loadHidden)}>
							<img
								alt="Profile"
								className="img-fluid rounded shadow-lg"
								height="auto"
								width="300px"
								src={profileImage}
							/>
						</div>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className={classNames(styles.aboutWrapper__info, styles.loadHidden)}>
							<p className={classNames(styles.aboutWrapper__info__text)}>
								I am a confident and highly organized programmer with a continuous developing
								skills in web/ mobile applications and software development.
							</p>
							<p className={classNames(styles.aboutWrapper__info__text)}>
								I like to experience new places and meet different nations! That's why I love travelling.
								My goal is working in a big famous IT company.
							</p>
							<span className="d-flex mt-3">
								<a
									rel="noreferrer"
									target="_blank"
									className="ctaBtn ctaBtnResume"
									href={resumePdf}
								>
									View Resume
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
