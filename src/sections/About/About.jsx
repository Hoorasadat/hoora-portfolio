import React from 'react';
import classNames from 'classnames';
import styles from './About.module.scss';
// import btnStyles from '../common/styles/_buttons.scss';
import '../../common/styles/_sections.scss';
import profileImage from '../../assets/profile.jpg';
import resumePdf from '../../assets/resume.pdf';

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
								Hello! I'm a highly organized programmer passionate about crafting efficient web solutions. With a background in Object-Oriented and Full-Stack Software Development, I specialize in agile Scrum methodology. I aim to contribute my skills to a leading IT company, engaging in cutting-edge projects and making a lasting impact.
								<br/>
								Beyond coding, I'm an avid traveler with a keen curiosity for diverse cultures.
								<br/>
								Join me on this journey of continuous learning and innovation!
							</p>
							<span className="d-flex flex-row mt-3">
								<a
									rel="noreferrer"
									target="_blank"
									className="ctaBtn ctaBtnResume"
									href={resumePdf}
								>
									PDF Resume
								</a>
								<a
									rel="noreferrer"
									target="_blank"
									className="ctaBtn ctaBtnResume"
									href="https://hoorasadat.github.io/React-Resume/"
								>
									Live Resume
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
