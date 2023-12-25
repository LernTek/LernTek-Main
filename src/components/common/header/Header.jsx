import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
	const [click, setClick] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const handleScrolled = () => {
			const scrolled = window.scrollY > 0;
			setIsScrolled(scrolled);
		};
		window.addEventListener('scroll', handleScrolled);
		return () => {
			window.removeEventListener('scroll', handleScrolled);
		};
	}, []);
	return (
		<>
			<header className={isScrolled ? 'scrolled' : ''}>
				<div className="mycontainer">
					<nav className="flexSB">
						<a href="/">
							<div className="start">
								<img className="logoImg" src="../images/logo (1).png" />
								<div className="button">LernTek</div>
							</div>
						</a>
						<ul
							className={click ? 'mobile-nav' : 'flexSB '}
							onClick={() => setClick(false)}
						>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/resources">Resoucses</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/team">Team</Link>
							</li>
							{/* <li>
              <Link to='/pricing'>Pricing</Link>
            </li> */}
							<li>
								<Link to="/blog">Blogs</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>

						<button className="toggle" onClick={() => setClick(!click)}>
							{click ? (
								<i className="fa fa-times"> </i>
							) : (
								<i className="fa fa-bars"></i>
							)}
						</button>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
