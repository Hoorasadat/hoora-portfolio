import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import classNames from 'classnames';
import logo from '../../assets/logo.png';
import styles from './Navbar.module.scss';

const NavHeader = () => {
  const [bounceAnimation, setBounceAnimation] = useState(false);

  useEffect(() => {
	// Start the bounce animation after component mount
	const intervalId = setInterval(() => {
	  setBounceAnimation((prev) => !prev);
	}, 500);

	// Clear the interval when the component unmounts
	return () => clearInterval(intervalId);
  }, []);

  return (
	<nav className={classNames(styles.nav, "navbar fixed-top navbar-expand-lg")}>
		<button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="nav navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav ml-auto">

				<li className="nav-item">
					<Link
						id="len1"
						className={classNames(styles.navlink, "navbar-brand", { bounce: bounceAnimation })}
						rel="noreferrer"
						to="home"
						smooth={true}
						duration={500}
					>
						<img className={styles.logo} src={logo} alt="HOME" />
					</Link>
				</li>
				<li className="nav-item">
					<Link
						id="len2"
						className={classNames(styles.navlink, styles.navText, "nav-link")}
						rel="noreferrer"
						to="about"
						smooth={true}
						duration={500}
					>
					ABOUT
					</Link>
				</li>

				<li className="nav-item">
					<Link
						id="len3"
						className={classNames(styles.navlink, styles.navText, "nav-link")}
						rel="noreferrer"
						to="resume"
						smooth={true}
						duration={500}
					>
						RESUME
					</Link>
				</li>

				<li className="nav-item">
					<Link
						id="len4"
						className={classNames(styles.navlink, styles.navText, "nav-link")}
						rel="noreferrer"
						to="projects"
						smooth={true}
						duration={500}
					>
						PORTFOLIO
					</Link>
				</li>

				<li className="nav-item">
					<Link
						id="len5"
						className={classNames(styles.navlink, styles.navText, "nav-link")}
						rel="noreferrer"
						to="contact"
						smooth={true}
						duration={500}
					>
						CONTACT
					</Link>
				</li>
			</ul>
		</div>
	</nav>
  );
};

export default NavHeader;
