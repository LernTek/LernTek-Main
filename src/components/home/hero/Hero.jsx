import React from 'react';
import Heading from '../../common/heading/Heading';
import './Hero.css';

const Hero = () => {
	return (
		<>
			<section className="hero">
				<div className="mycontainer">
					<div className="row">
						<Heading
							subtitle="WELCOME TO ACADEMIA"
							title="Best Online Education Expertise"
						/>
						<p>
							Far far away, behind the word mountains, far from the countries Vokalia
							and Consonantia, there live the blind texts.
						</p>
						<div className="button">
							<a href="/resources">
								<button className="primary-btn">
									GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
								</button>
							</a>
						</div>
					</div>
				</div>
			</section>
			{/* <div className="margin"></div> */}
		</>
	);
};

export default Hero;
