import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import arrow from './arrow.svg';
import './index.scss'

interface SimpleSliderProps {
	slidesArr: { name: string, link: string, img: string }[]
}

export const SimpleSlider = ({ slidesArr }: SimpleSliderProps) => {


	return (
		<>
			<Swiper
				height={ 450 }
				slidesPerView={ 4 }
				spaceBetween={ 30 }
				navigation={ {
					prevEl: '.arrows .prev',
					nextEl: '.arrows .next',
				} }

				modules={ [Navigation] }
				className="categorySwiper"
				breakpoints={ {
					// when window width is >= 320px
					320: {
						slidesPerView: 1,
						spaceBetween: 5
					},
					// when window width is >= 480px
					480: {
						slidesPerView: 2,
						spaceBetween: 10
					},
					// when window width is >= 640px
					640: {
						slidesPerView: 3,
						spaceBetween: 15
					},
					1100: {
						slidesPerView: 4,
						spaceBetween: 15
					}
				}
				}
			>

				{ slidesArr.map((item, index) => (
					<SwiperSlide key={ index } className="slide">
						<img
							loading="lazy"
							src={ process.env.REACT_APP_BASE_URL + '/' + 'category' + '/' + item.img }
							alt={ item.name } />
						<div className="swiper-lazy-preloader"></div>
						<div className="categoryName">{ item.name }</div>
					</SwiperSlide>
				)) }
				<div className="arrows">
					<div className="arrow prev" ><img src={ arrow } /></div>
					<div className="arrow next" ><img src={ arrow } /></div>
				</div>

			</Swiper>
		</>
	);
}
