import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from 'swiper/types/swiper-class';

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/thumbs";

import "./index.scss";

// import required modules
import { FreeMode, Thumbs } from "swiper";

interface ThumbsSliderProps {
	slidesArr: string[]
	name: string
	slug: string
}

export function ThumbsSlider({ name, slidesArr, slug }: ThumbsSliderProps) {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();


	const slides = slidesArr.map((slide, index) => (
		<SwiperSlide key={ index }>
			<img loading="lazy" src={ process.env.REACT_APP_BASE_URL + '/' + slug + '/' + slide } alt={ name } />
			<div className="swiper-lazy-preloader"></div>
		</SwiperSlide>
	))

	return (
		<div className="thumbSlider">
			<Swiper
				loop={ true }
				spaceBetween={ 10 }
				navigation={ true }
				thumbs={ { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null } }
				modules={ [FreeMode, Thumbs] }
				className="mainSlider"
			>
				{ slides }
			</Swiper>
			<Swiper
				onSwiper={ setThumbsSwiper }
				loop={ true }
				spaceBetween={ 10 }
				slidesPerView={ 5 }
				freeMode={ true }
				watchSlidesProgress={ true }
				modules={ [FreeMode, Thumbs] }
				className="thumbsSlider"
			>
				{ slides }
			</Swiper>
		</div>
	);
}
