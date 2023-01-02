import './Awesome.css'

import { Link } from 'react-router-dom'

import { BsHeart } from 'react-icons/bs'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import React from "react";

function Awesome () {
	
	const [windowX, setWindowX] = React.useState(window.innerWidth)
	
	let slidesPerView = 6
	if (windowX < 768) {
		slidesPerView = 1
	} else if (windowX >= 768 && windowX < 992) {
		slidesPerView = 3
	} else if (windowX >= 992 && windowX < 1200) {
		slidesPerView = 4
	} else if (windowX >= 1200) {
		slidesPerView = 6
	}
	
	window.addEventListener('resize', () => setWindowX(window.innerWidth))
	
	return (
		<div className="container-fluid awesome">
			<h3 className='ms-4 mb-4'>Awesome</h3>
			<Swiper
				slidesPerView={slidesPerView}
				navigation={true}
				modules={[Autoplay, Navigation]}
				autoplay={true}
				loop={true}
				
				className='mySwiper user-select-none pb-5'>
				<SwiperSlide>
					<div className="product-item">
						<Link to='/'>
							<img src="/Images/awesome/1.jpg" alt="product"/>
							<div className='hover'>
								<p className='fw-bold'>Wireless headphones</p>
								<p className="price">$150</p>
							</div>
						</Link>
						<div className='d-flex justify-content-between align-items-center product-item-bottom hover'>
							<span className='add-to-cart pointer'>+ Add to cart</span>
							<BsHeart className='pointer' fontSize={20} color='000' />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="product-item">
						<Link to='/'>
							<img src="/Images/awesome/2.jpg" alt="product"/>
							<div className='hover'>
								<p className='fw-bold'>Wireless headphones</p>
								<p className="price">$150</p>
							</div>
						</Link>
						<div className='d-flex justify-content-between align-items-center product-item-bottom hover'>
							<span className='add-to-cart pointer'>+ Add to cart</span>
							<BsHeart className='pointer' fontSize={20} color='000' />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="product-item">
						<Link to='/'>
							<img src="/Images/awesome/3.jpg" alt="product"/>
							<div className='hover'>
								<p className='fw-bold'>Wireless headphones</p>
								<p className="price">$150</p>
							</div>
						</Link>
						<div className='d-flex justify-content-between align-items-center product-item-bottom hover'>
							<span className='add-to-cart pointer'>+ Add to cart</span>
							<BsHeart className='pointer' fontSize={20} color='000' />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="product-item">
						<Link to='/'>
							<img src="/Images/awesome/4.jpg" alt="product"/>
							<div className='hover'>
								<p className='fw-bold'>Wireless headphones</p>
								<p className="price">$150</p>
							</div>
						</Link>
						<div className='d-flex justify-content-between align-items-center product-item-bottom hover'>
							<span className='add-to-cart pointer'>+ Add to cart</span>
							<BsHeart className='pointer' fontSize={20} color='000' />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="product-item">
						<Link to='/'>
							<img src="/Images/awesome/5.jpg" alt="product"/>
							<div className='hover'>
								<p className='fw-bold'>Wireless headphones</p>
								<p className="price">$150</p>
							</div>
						</Link>
						<div className='d-flex justify-content-between align-items-center product-item-bottom hover'>
							<span className='add-to-cart pointer'>+ Add to cart</span>
							<BsHeart className='pointer' fontSize={20} color='000' />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="product-item">
						<Link to='/'>
							<img src="/Images/awesome/6.jpg" alt="product"/>
							<div className='hover'>
								<p className='fw-bold'>Wireless headphones</p>
								<p className="price">$150</p>
							</div>
						</Link>
						<div className='d-flex justify-content-between align-items-center product-item-bottom hover'>
							<span className='add-to-cart pointer'>+ Add to cart</span>
							<BsHeart className='pointer' fontSize={20} color='000' />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="product-item">
						<Link to='/'>
							<img src="/Images/awesome/7.jpg" alt="product"/>
							<div className='hover'>
								<p className='fw-bold'>Wireless headphones</p>
								<p className="price">$150</p>
							</div>
						</Link>
						<div className='d-flex justify-content-between align-items-center product-item-bottom hover'>
							<span className='add-to-cart pointer'>+ Add to cart</span>
							<BsHeart className='pointer' fontSize={20} color='000' />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="product-item">
						<Link to='/'>
							<img src="/Images/awesome/8.jpg" alt="product"/>
							<div className='hover'>
								<p className='fw-bold'>Wireless headphones</p>
								<p className="price">$150</p>
							</div>
						</Link>
						<div className='d-flex justify-content-between align-items-center product-item-bottom hover'>
							<span className='add-to-cart pointer'>+ Add to cart</span>
							<BsHeart className='pointer' fontSize={20} color='000' />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="product-item">
						<Link to='/'>
							<img src="/Images/awesome/9.jpg" alt="product"/>
							<div className='hover'>
								<p className='fw-bold'>Wireless headphones</p>
								<p className="price">$150</p>
							</div>
						</Link>
						<div className='d-flex justify-content-between align-items-center product-item-bottom hover'>
							<span className='add-to-cart pointer'>+ Add to cart</span>
							<BsHeart className='pointer' fontSize={20} color='000' />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="product-item">
						<Link to='/'>
							<img src="/Images/awesome/10.jpg" alt="product"/>
							<div className='hover'>
								<p className='fw-bold'>Wireless headphones</p>
								<p className="price">$150</p>
							</div>
						</Link>
						<div className='d-flex justify-content-between align-items-center product-item-bottom hover'>
							<span className='add-to-cart pointer'>+ Add to cart</span>
							<BsHeart className='pointer' fontSize={20} color='000' />
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Awesome