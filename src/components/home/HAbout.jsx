import React from 'react';
import { Link } from 'react-router-dom';
// import OnlineCourses from "../resources/OnlineCourses"
import Heading from '../common/heading/Heading';
import '../resources/resources.css';
import { resourcesCard } from '../../dummydata';

const HAbout = () => {
	return (
		<>
			<section className="coursesCard">
				<Heading subtitle="our courses" title="explore our popular online courses" />
				<div className="mycontainer grid2">
					{resourcesCard.slice(0, 3).map((val) => (
						<div className="items">
							<div className="content flex">
								{/* <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div> */}
								<img src={val.cover} alt="" />
								{/* <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div> */}
							</div>
							<div className="price">
								<h2>{val.courseTitle}</h2>
							</div>
							<Link to={val.resourceRoute}>
								<button className="outline-btn">Get Started</button>
							</Link>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default HAbout;
