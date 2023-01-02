import './Brands.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper";

import 'swiper/css/free-mode'

import { GiStarFormation } from 'react-icons/gi'

function Brands () {
	return (
		<div className='container-fluid brands pt-3 mb-5'>
			<div>
				<h4 className='text-center mt-3'><GiStarFormation color='#f9bc00' fontSize={28} /> The Most Popular Brands</h4>
				<Swiper
					slidesPerView={9}
					freeMode={true}
					navigation={true}
					loop={true}
					autoplay={true}
					modules={[FreeMode, Navigation, Autoplay]}
					className='mySwiper user-select-none py-3'>
					<SwiperSlide>
						<img src="/Images/brands/1.jpg" alt="brand 1"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src="/Images/brands/2.png" alt="brand 2"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src="/Images/brands/3.png" alt="brand 3"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src="/Images/brands/4.png" alt="brand 4"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src="/Images/brands/5.png" alt="brand 5"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src="/Images/brands/6.png" alt="brand 6"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src="/Images/brands/7.png" alt="brand 7"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src="/Images/brands/8.png" alt="brand 8"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src="/Images/brands/9.png" alt="brand 9"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src="/Images/brands/10.jpg" alt="brand 10"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src="/Images/brands/11.jpg" alt="brand 11"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src="/Images/brands/12.png" alt="brand 11"/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default Brands