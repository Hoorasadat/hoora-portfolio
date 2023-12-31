import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Navbar as BootstrapNavbar, Button } from 'react-bootstrap';
import classNames from 'classnames';
import logo from '../../../../assets/logo.png';
import styles from './Navbar.module.scss';

const NavHeader = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [bounceAnimation, setBounceAnimation] = useState(false);
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 120);
		};

		// Add scroll event listener
		window.addEventListener('scroll', handleScroll);

		// Remove event listener when component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		// Start the bounce animation after component mount
		const intervalId = setInterval(() => {
		setBounceAnimation((prev) => !prev);
		}, 500);

		// Clear the interval when the component unmounts
		return () => clearInterval(intervalId);
	}, []);

	const handleNavbarToggle = () => {
		// Toggle the navbar show and hide when the button is clicked
		setIsNavbarOpen(!isNavbarOpen);
	};

	const handleNavItemClick = () => {
		// Close the navbar when a nav item is clicked
		setIsNavbarOpen(false);
	  };

	return (
		<BootstrapNavbar
			className={classNames(styles.nav, isScrolled && styles.scrolled)}
			fixed="top"
			expand="lg"
		>
			<div className="container">
				<Button
					className={classNames(styles.btn, "navbar-toggler")}
					variant="outline-light"
					onClick={handleNavbarToggle}
				>
					<span className="nav navbar-toggler-icon"></span>
				</Button>
			</div>
			<BootstrapNavbar.Collapse in={isNavbarOpen}>
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link
							id="len1"
							className={classNames(styles.navlink, isScrolled && styles.scrolled, { bounce: bounceAnimation }, "nav-link")}
							rel="noreferrer"
							to="home"
							smooth={true}
							duration={500}
							offset={-100}
							onClick={handleNavItemClick}
						>
							<img className={styles.logo} src={logo} alt="HOME" />
						</Link>
					</li>

					<li className="nav-item">
						<Link
							id="len2"
							className={classNames(styles.navlink, styles.navText, isScrolled && styles.scrolled, "nav-link")}
							rel="noreferrer"
							to="about"
							smooth={true}
							duration={500}
							offset={-50}
							onClick={handleNavItemClick}
						>
							ABOUT
						</Link>
					</li>

					<li className="nav-item">
						<Link
							id="len3"
							className={classNames(styles.navlink, styles.navText, isScrolled && styles.scrolled, "nav-link")}
							rel="noreferrer"
							to="resume"
							smooth={true}
							duration={500}
							offset={-120}
							onClick={handleNavItemClick}
						>
							RESUME
						</Link>
					</li>

					<li className="nav-item">
						<Link
							id="len4"
							className={classNames(styles.navlink, styles.navText, isScrolled && styles.scrolled, "nav-link")}
							rel="noreferrer"
							to="projects"
							smooth={true}
							duration={500}
							offset={-50}
							onClick={handleNavItemClick}
						>
							PORTFOLIO
						</Link>
					</li>

					<li className="nav-item">
						<Link
							id="len5"
							className={classNames(styles.navlink, styles.navText, isScrolled && styles.scrolled, "nav-link")}
							rel="noreferrer"
							to="contact"
							smooth={true}
							duration={500}
							onClick={handleNavItemClick}
						>
							CONTACT
						</Link>
					</li>
				</ul>
			</BootstrapNavbar.Collapse>
		</BootstrapNavbar>
  );
};

export default NavHeader;
