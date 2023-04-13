import React, { useState } from "react";
import BlogCard from "../../UI/BlogCard/BlogCard";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { BLOG_CONTENT } from "../../../utils/constants";
// import Swiper bundle with all modules installed
// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Scrollbar, A11y, EffectCoverflow } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Blog = () => {
	const { i18n } = useTranslation();
	const [activeSlide, setActiveSlide] = useState(0);

	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	let content = BLOG_CONTENT;

	i18n.language === "en"
		? (content = content.English)
		: (content = content.Japanese);

	const DesktopBlogCarousel = ({ content, activeSlide, setActiveSlide }) => {
		return (
			<Swiper
				// install Swiper modules
				modules={[Navigation, Scrollbar, A11y, EffectCoverflow]}
				effect="coverflow"
				spaceBetween={40}
				slidesPerView={isMobile ? 1 : 3}
				navigation
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
				loop
			>
				{content.posts.map((post, index) => (
					<SwiperSlide>
						{" "}
						<BlogCard
							key={index}
							title={post.title}
							image={post.image}
							link={post.link}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		);
	};

	// not used anymore
	const MobileBlogList = ({ content }) => {
		return (
			<div id="BlogList">
				<h1 className="blog-post-list-heading">Blog Posts</h1>
				{content.posts.map((post, index) => (
					<a href={post.link} target="_blank" rel="noreferrer" key={post.link}>
						<h3 className="blog-post-list-title">{post.title}</h3>
					</a>
				))}
			</div>
		);
	};
	return (
		<AnimationOnScroll
			animateIn="animate__fadeIn"
			animateOut="animate__fadeOut"
			animateOnce={true}
			speed={4}
		>
			<Main>
				<div id="Blog">
					<Title>{content.mainTitle}</Title>

					<DesktopBlogCarousel
						content={content}
						activeSlide={activeSlide}
						setActiveSlide={setActiveSlide}
					/>
				</div>
			</Main>
		</AnimationOnScroll>
	);
};

const Title = styled.h1`
	margin-top: 0px;
	margin-bottom: 75px;
	text-decoration-line: underline;
	text-decoration-color: var(--secondary-color);
	text-decoration-thickness: 5px;
	text-underline-offset: 12px;
`;

const Main = styled.div`
	background-color: var(--black);
	padding-bottom: 50px;

	// carousel styling
	.swiper-button-prev,
	.swiper-button-next {
		color: var(--secondary-color);
		transform: scale(1.5);
	}

	.projects-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.ReactModal__Overlay {
		background-color: var(--black) !important;
	}

	@media (max-width: 800px) {
		.project-icons {
			display: none !important;
		}
	}

	@media (min-width: 1300px) {
		.projects-container {
			width: 90%;
			margin: 60px auto;
			padding-bottom: 60px;
		}

		h1 {
			font-size: 2.5rem;
		}
	}

	#Blog {
		text-align: center;
		padding-bottom: 50px;
	}

	.direction-btn {
		display: flex !important;
		width: 60px;
		height: 60px;
		min-width: 60px;
		background-color: black;
		border-radius: 50%;
		justify-content: center;
	}

	.direction-icon {
		display: block;
	}

	#BlogList {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		margin-bottom: 32px;
		padding-left: 8px;
		padding-right: 8px;
	}

	@media (min-width: 2000px) {
		.direction-btn {
			margin: 20px;
		}
	}

	.blog-post-list-heading {
		text-align: center;
	}

	a {
		text-decoration: none;
	}

	.blog-post-list-title {
		color: var(--secondary-color);
		text-align: center;
	}
`;

export default Blog;
