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
				<h2 className={classNames(styles.loadHidden, "sectionTitle")}>About me</h2>
				<div className={classNames(styles.aboutWrapper, "row")}>
					<div className="col-md-4 col-sm-12 pr-5">
						<div className={classNames(styles.aboutWrapper__image, styles.loadHidden)}>
							<img
								alt="Profile"
								className="img-fluid rounded shadow-lg"
								height="auto"
								width="300px"
								src={profileImage}
							/>
						</div>
						<div className={classNames(styles.socialLinks, "row d-flex flex-row justify-content-center")}>
							<a rel="noreferrer" href="https://www.linkedin.com/in/hoorasadat-mirsanei/" target="_blank">
								<i className="fa fa-linkedin fa-inverse"></i>
							</a>
							<a rel="noreferrer" href="https://github.com/Hoorasadat" target="_blank">
								<i className="fa fa-github fa-inverse"></i>
							</a>
						</div>
					</div>
					<div className="col-md-8 col-sm-12 pl-5">
						<div className={classNames(styles.aboutWrapper__info, styles.loadHidden)}>
							<p className={styles.aboutWrapper__info__text}>
								Hello! I'm a highly organized programmer passionate about crafting efficient web solutions with a background in
								<span className={classNames(styles.aboutWrapper__info__text__important)}>
									Object-Oriented
								</span>
								and
								<span className={styles.aboutWrapper__info__text__important}>
									Full-Stack
								</span>
								 Software Development and speciality in agile methodology. I aim to contribute my skills to a leading IT company, engaging in cutting-edge projects and making a lasting impact.
								<br/>
								Beyond coding, I'm an avid traveler with a keen curiosity for diverse cultures.
								<br/>
								Join me on this journey of continuous learning and innovation!
							</p>
						</div>
						<div className="row d-flex flex-row justify-content-center">
								<a
									rel="noreferrer"
									target="_blank"
									className="ctaBtn ctaBtnResume mr-3"
									href={resumePdf}
								>
									PDF Resume
								</a>
								<a
									rel="noreferrer"
									target="_blank"
									className="ctaBtn ctaBtnResume ml-3"
									href="https://hoorasadat.github.io/React-Resume/"
								>
									Live Resume
								</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
