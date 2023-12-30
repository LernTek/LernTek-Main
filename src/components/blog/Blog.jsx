import React from 'react';
import Back from '../common/back/Back';
import BlogCard from './BlogCard';
import './blog.css';

const Blog = () => {
	return (
		<>
			<Back title="Blog Posts" img={'b3'} />
			<section className="blog padding">
				{/* <div className="blog-head">
					<div className="blog-title">Welcome To LernTek</div>
					<h4 className="blog-paragraph">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus fuga
						nobis hic est rerum magnam eligendi vero, aperiam velit nam illum unde omnis
						nostrum, cupiditate provident ipsam iure a odit.
					</h4>
					<button>Go To Form</button>
				</div> */}
				<div className="mycontainer grid2">
					<BlogCard />
				</div>
			</section>
		</>
	);
};

export default Blog;
