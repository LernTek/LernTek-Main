import React, { useState } from 'react';
import './roadmap.css';

const Roadmap = ({ imageSrc, heading, paragraph, listItems, link }) => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const toggleFullScreen = () => {
		setIsFullScreen(!isFullScreen);
	};

	const openLinkInNewTab = () => {
		window.open(link, '_blank');
	};

	return (
		<div className=" roadmap">
			<div className="mycontainer roadmap-flex">
				{/* Left Half - Photo */}
				<div className="photo-container" onClick={toggleFullScreen}>
					<img src={imageSrc} alt="Card" className="photo" />
					{isFullScreen && (
						<div className="fullscreen-overlay" onClick={toggleFullScreen}>
							<img
								src={imageSrc}
								alt="Card Fullscreen"
								className="fullscreen-photo"
							/>
						</div>
					)}
				</div>

				{/* Right Half - Content */}
				<div className="content-container">
					<h2 className="heading">{heading}</h2>
					<p className="paragraph">{paragraph}</p>
					<ul className="list">
						{listItems.map((item, index) => (
							<li key={index}> - {item}</li>
						))}
					</ul>

					<button
						style={{
							backgroundColor: '#6c63ff',
							color: 'white',
							padding: '15px 30px',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
						}}
						className="buttons"
						onClick={openLinkInNewTab}
					>
						Detailed Roadmap
					</button>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
