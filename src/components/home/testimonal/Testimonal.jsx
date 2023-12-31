import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from '../../common/heading/Heading';
import { testimonal } from '../../../dummydata';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

export default function Testimonial() {
	return (
		<>
			<div className="testmonialSection">
				<div className="mycontainer">
					<Heading
						className="test-heading"
						subtitle="TESTIMONIAL"
						title="Our Successful Students"
					/>
					<Swiper
						spaceBetween={30} // Adjust the spaceBetween property
						centeredSlides={true}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper"
					>
						<div className="content grid2">
							{testimonal.map((val) => (
								<SwiperSlide key={val.id}>
									<div className="test-items shadow">
										<div className="test-box">
											<div className="img">
												<img src={val.cover} alt="" />
											</div>
											<div className="name">
												<h2>{val.name}</h2>
												<span>{val.post}</span>
											</div>
										</div>
										<p>{val.desc}</p>
									</div>
								</SwiperSlide>
							))}
						</div>
					</Swiper>
				</div>
			</div>
		</>
	);
}
