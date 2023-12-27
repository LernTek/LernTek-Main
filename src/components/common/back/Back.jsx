import React from 'react';
import { useLocation } from 'react-router-dom';

const Back = ({ title, img }) => {
	const location = useLocation();

	return (
		<>
			<section className={`back ${img}`}>
				<div className="mycontainer">
					<h2>Home / {location.pathname.split('/')[1]}</h2>
					<h1>{title}</h1>
				</div>
			</section>
			{/* <div className='margin'></div> */}
		</>
	);
};

export default Back;
