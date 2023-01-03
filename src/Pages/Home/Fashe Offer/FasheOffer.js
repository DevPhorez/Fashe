import './FasheOffer.css'
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";


function FasheOffer () {
	
	const [windowX, setWindowX] = React.useState(window.innerWidth)
	
	let slidesPerView = 7
	if (windowX <= 992) {
		slidesPerView = 3
	} else {
		slidesPerView = 7
	}
	
	window.addEventListener('resize', () => setWindowX(window.innerWidth))
	
	return (
		<div className='container-fluid fashe-offer mb-5'>
			<h3 className='text-center'>Fashe<b className='text-danger fw-bold fs-1'>.</b> Offer</h3>
			<div>
				<Swiper
					slidesPerView={slidesPerView}
					className='mySwiper user-select-none'>
					<SwiperSlide>
						<div className="item top-item">
							<div className='p-3 rounded-circle parent'>
								<div className='position-relative'>
									<img src="/Images/1.jpg" alt=""/>
								</div>
							</div>
							<p className='mt-1'>Mouse</p>
						</div>
						<div className="item bottom-item">
							<div className='p-3 rounded-circle parent'>
								<div className='position-relative'>
									<img src="/Images/1.jpg" alt=""/>
								</div>
							</div>
							<p className='mt-1'>Mouse</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="item top-item">
							<div className='p-3 rounded-circle parent'>
								<div className='position-relative'>
									<img src="/Images/1.jpg" alt=""/>
								</div>
							</div>
							<p className='mt-1'>Mouse</p>
						</div>
						<div className="item bottom-item">
							<div className='p-3 rounded-circle parent'>
								<div className='position-relative'>
									<img src="/Images/1.jpg" alt=""/>
								</div>
							</div>
							<p className='mt-1'>Mouse</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="item top-item">
							<div className='p-3 rounded-circle parent'>
								<div className='position-relative'>
									<img src="/Images/1.jpg" alt=""/>
								</div>
							</div>
							<p className='mt-1'>Mouse</p>
						</div>
						<div className="item bottom-item">
							<div className='p-3 rounded-circle parent'>
								<div className='position-relative'>
									<img src="/Images/1.jpg" alt=""/>
								</div>
							</div>
							<p className='mt-1'>Mouse</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="item top-item">
							<div className='p-3 rounded-circle parent'>
								<div className='position-relative'>
									<img src="/Images/1.jpg" alt=""/>
								</div>
							</div>
							<p className='mt-1'>Mouse</p>
						</div>
						<div className="item bottom-item">
							<div className='p-3 rounded-circle parent'>
								<div className='position-relative'>
									<img src="/Images/1.jpg" alt=""/>
								</div>
							</div>
							<p className='mt-1'>Mouse</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="item top-item">
							<div className='p-3 rounded-circle parent'>
								<div className='position-relative'>
									<img src="/Images/1.jpg" alt=""/>
								</div>
							</div>
							<p className='mt-1'>Mouse</p>
						</div>
						<div className="item bottom-item">
							<div className='p-3 rounded-circle parent'>
								<div className='position-relative'>
									<img src="/Images/1.jpg" alt=""/>
								</div>
							</div>
							<p className='mt-1'>Mouse</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="item top-item">
							<div className='p-3 rounded-circle parent'>
								<div className='position-relative'>
									<img src="/Images/1.jpg" alt=""/>
								</div>
							</div>
							<p className='mt-1'>Mouse</p>
						</div>
						<div className="item bottom-item">
							<div className='p-3 rounded-circle parent'>
								<div className='position-relative'>
									<img src="/Images/1.jpg" alt=""/>
								</div>
							</div>
							<p className='mt-1'>Mouse</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="item top-item last-items">
							<div className='p-3 rounded-circle parent'>
								<div className='position-relative'>
									<img src="/Images/1.jpg" alt=""/>
								</div>
							</div>
							<p className='mt-1'>Mouse</p>
						</div>
						<div className="item bottom-item last-items">
							<div className='p-3 rounded-circle parent'>
								<div className='position-relative'>
									<img src="/Images/1.jpg" alt=""/>
								</div>
							</div>
							<p className='mt-1'>Mouse</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default FasheOffer