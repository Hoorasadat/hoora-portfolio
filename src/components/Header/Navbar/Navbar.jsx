import React, { useState, useEffect } from 'react';
import { Link as RoutLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Navbar as BootstrapNavbar, Button } from 'react-bootstrap';
import classNames from 'classnames';
import logo from '../../../assets/logo.png';
import styles from './Navbar.module.scss';

const Navbar = (props) => {
	const {naveHomeItem, navItems, type} = props;
	const allNavItems = [naveHomeItem, ...navItems];

	const LinkComponent = type==="scroll" ? ScrollLink : RoutLink;

	const [isScrolled, setIsScrolled] = useState(false);
	const [bounceAnimation, setBounceAnimation] = useState(false);
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);
	const [activeItemId, setActiveItemId] = useState(1);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;

			// Determine which section is currently in view based on scroll position
			const activeSection = allNavItems.find((navItem) => {
				const section = document.getElementById(navItem.to);
				if (section) {
				  	const rect = section.getBoundingClientRect();
				  	return rect.top <= 150 && rect.bottom >= 500;
				}
				return false;
			});

			if (activeSection) {
				setActiveItemId(activeSection.id);
			}

			setIsScrolled(scrollPosition > 90);
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

	const handleNavItemClick = (id) => {
		// Close the navbar when a nav item is clicked
		setIsNavbarOpen(false);
	  };

	// An array of items in navbar excluding the first item that is the app logo
	const navArray = navItems.map(navItem => {
		return(
			<li key={navItem.id} className="nav-item">
				<LinkComponent
					id={`len${navItem.id}`}
					className={classNames(
						styles.navlink,
						styles.navText,
						isScrolled && styles.scrolled,
						activeItemId === navItem.id && type==="scroll" && styles.active,
						"nav-link"
					)}
					rel="noreferrer"
					to={navItem.to}
					smooth={true}
					duration={500}
					// have a different offset for ABOUT section
					offset={navItem.id === 2 ? -90 : 0}
					onClick={() => handleNavItemClick(navItem.id)}
				>
					{navItem.title}
				</LinkComponent>
			</li>
		)
	});

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
						<LinkComponent
							key={naveHomeItem.id}
							id={`len${naveHomeItem.id}`}
							className={classNames(
								styles.navlink,
								isScrolled && styles.scrolled,
								{ bounce: bounceAnimation },
								activeItemId === naveHomeItem.id && type==="scroll" && styles.active,
								"nav-link"
							)}
							rel="noreferrer"
							to={naveHomeItem.to}
							smooth={true}
							duration={500}
							offset={-100}
							onClick={() => handleNavItemClick(naveHomeItem.id)}
						>
							<img className={styles.logo} src={logo} alt="HOME" />
						</LinkComponent>
					</li>

					{navArray}
				</ul>
			</BootstrapNavbar.Collapse>
		</BootstrapNavbar>
  );
};

export default Navbar;
