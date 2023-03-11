import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.module.scss";

// import required modules
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

interface PaginationSliderProps {
	imagesArr: string[]
	slug: string
	title: string
}

export function PaginationSlider({ imagesArr, slug, title }: PaginationSliderProps) {

	return (
		<Link to={ slug }>
			<Swiper
				pagination={ true }
				modules={ [Pagination] }
				className="paginationSlider">
				{ imagesArr.map((slide, index) => (
					<SwiperSlide className="slide">
						<img loading="lazy" src={ process.env.REACT_APP_BASE_URL + '/' + slug + '/' + slide } alt={ title } />
						<div className="swiper-lazy-preloader"></div>
					</SwiperSlide>
				)) }

			</Swiper>
		</Link>
	);
}
