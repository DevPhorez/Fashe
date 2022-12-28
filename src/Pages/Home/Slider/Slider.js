import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css'
import 'swiper/css/navigation'

import './Slider.css'

import { Navigation, Autoplay, Pagination } from "swiper";

function Slider () {
	return (
		<>
			<Swiper
				slidesPerView={1}
				navigation={true}
				modules={[Navigation, Autoplay, Pagination]}
				autoplay={true}
				loop={true}
				pagination={{
					enabled: true,
					clickable: true,
				}}
				
				className='mySwiper user-select-none'>
				<SwiperSlide>
					<img src="/Images/slides/page 1.jpg" alt="page 1"/>
				</SwiperSlide>
				<SwiperSlide>
					<img src="/Images/slides/page 2.jpg" alt="page 2"/>
				</SwiperSlide>
				<SwiperSlide>
					<img src="/Images/slides/page 3.jpg" alt="page 3"/>
				</SwiperSlide>
				<SwiperSlide>
					<img src="/Images/slides/page 4.jpg" alt="page 4"/>
				</SwiperSlide>
				<SwiperSlide>
					<img className='img-fluid' src="/Images/slides/page 5.jpg" alt="page 5"/>
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default Slider