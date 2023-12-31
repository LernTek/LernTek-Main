import React from 'react';
import Back from '../common/back/Back';
import './contact.css';

const Contact = () => {
	return (
		<>
			<Back title="Contact us" img={'b4'} />
			<section className="contacts padding">
				<div className="mycontainer shadow flexSB">
					<div className="right">
						<h1>Contact us</h1>
						<p>We're open for any suggestion or just to have a chat</p>

						<div className="items grid2">
							<div className="box">
								<h4>ADDRESS:</h4>
								<p>Muffakham Jah College of Engineering and</p>
								<p>Technology, Hyderabad, India</p>
							</div>
							<div className="box">
								<h4>EMAIL:</h4>
								<p> lerntek@gmail.com</p>
								<p> ghousetazeem75@gmail.com</p>
							</div>
							<div className="box">
								<h4>PHONE:</h4>
								<p> +91-6309274038</p>
								<p> +91-6309274038</p>
							</div>
						</div>

						<form action="https://formspree.io/f/xvoeplaa" method="POST">
							<div className="flexSB">
								<input type="text" name="name" placeholder="Name" />
								<input type="email" name="email" placeholder="Email" />
							</div>
							<input type="text" name="subject" placeholder="Subject" />
							<textarea
								cols="30"
								rows="10"
								name="message"
								placeholder="Create a message here..."
							></textarea>
							<button className="primary-btn">SEND MESSAGE</button>
						</form>

						{/* <h3>Follow us here</h3>
            <div className='social'>
              <i style={{ border: " 2px solid #6c63ff", marginRight: "8px" }} className='fab fa-facebook-f icon'></i>
              <i style={{ border: " 2px solid #6c63ff", marginRight: "8px" }} className='fab fa-instagram icon'></i>
              <i style={{ border: " 2px solid #6c63ff", marginRight: "8px" }} className='fab fa-twitter icon'></i>
              <i style={{ border: " 2px solid #6c63ff", marginRight: "8px" }} className='fab fa-youtube icon'></i>
            </div> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
