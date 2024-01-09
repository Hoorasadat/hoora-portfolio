import React from 'react';
import styles from './Contact.module.scss';
import btnStyles from '../../common/styles/_buttons.scss';
import fontStyles from '../../common/styles/_typography.scss';

const Contact = () => {
	return (
		<section id="contact" className={styles.contact}>
			<div className="container">
				<h2 className="sectionTitle">Contact me!</h2>
				<div className={styles.loadHidden}>
					<a rel="noreferrer" target="_blank" className="ctaBtn ctaBtnOthers"
						href = "mailto: mirsaanei@gmail.com"
					>
						Email me!
					</a>
					<br/>
					<br/>
					<a rel="noreferrer" target="_blank" className="ctaBtn ctaBtnOthers"
						href="tel:(403)466-2011"
					>
						Call me!
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
