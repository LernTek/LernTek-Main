import React from 'react';
import Back from '../common/back/Back';
import TeamCard from './TeamCard';
import './team.css';
import Awrapper from '../about/Awrapper';
import '../about/about.css';

const Team = () => {
	return (
		<>
			<h1 className='team-heading'>Meet Our Team</h1>
			<section className="team padding">
				<div className="mycontainer grid">
					<TeamCard />
				</div>
			</section>
		</>
	);
};

export default Team;
