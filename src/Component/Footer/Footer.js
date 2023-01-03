import './Footer.css'
import * as React from "react";

import { Button } from "rsuite";

import { AiOutlineArrowUp } from 'react-icons/ai'

import Scroll from 'react-scroll'

import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'

function Footer () {
	
	const [email, setEmail] = React.useState()
	
	return (
		<footer className='footer'>
			<div className="top-footer">
				<div className="left-side">
					<div className="logo">
						<img src="/Images/logo.png" alt="logo"/>
					</div>
					<div className="d-sm-block d-block d-md-flex align-items-center">
						<sapn className="number">
							Contact us
							021-1641854556
						</sapn>
						<br className="d-block d-md-none"/>
						<span>We answer you 24 hours a day, 7 days a week</span>
					</div>
				</div>
				<div className="right-side d-none d-sm-block">
					<Button className='border d-flex align-self-center' appearance="subtle" onClick={ () => {
						Scroll.animateScroll.scrollTo(0, 0)
					}}>
						Back to Top
						<AiOutlineArrowUp fontSize={20} className='ms-1 opacity-75'/>
					</Button>
				</div>
			</div>
			<div className='bottom-footer'>
				<div className="row mt-5">
					<div className="col-md-3 col-6 mb-md-0">
						<p className="title">
							Categories
						</p>
						<p>Men</p>
						<p>Women</p>
						<p>Dresses</p>
						<p>Sunglasses</p>
						<p>See All Categories</p>
					</div>
					<div className="col-md-3 d-none d-md-block ">
						<p className="title">
							Categories
						</p>
						<p>Men</p>
						<p>Women</p>
						<p>Dresses</p>
						<p>Sunglasses</p>
						<p>See All Categories</p>
					</div>
					<div className="col-md-3 col-6">
						<p className="title">
							Help
						</p>
						<p>Track Order</p>
						<p>Returns</p>
						<p>Shipping</p>
						<p>FAQs</p>
					</div>
					<div className="col-md-3 col-12 mt-4">
						<div className="d-flex justify-content-between align-items-center d-md-block mb-3 mb-md-0">
							<p className="title">
								Follow Us!
							</p>
							<div className="d-flex justify-content-between mt-2 mb-4 me-0 me-md-5" style={ { color: '#9e9fb1' } }>
								<FiInstagram className='pointer me-3 me-md-0' fontSize={32} />
								<BsTwitter className='pointer me-3 me-md-0' fontSize={32} />
								<FaLinkedin className='pointer me-3 me-md-0' fontSize={32} />
								<BsYoutube className='pointer' fontSize={32} />
							</div>
						</div>
						
						<p className="title" style={ { fontSize: '1.1rem'}}>
							Sign up to receive the latest discounts
						</p>
						<div className="d-flex justify-content-between">
							<div className='w-100 pe-1'>
								<div className="form">
									<input type="text" value={email} placeholder='Your Email' name="text" autoComplete="off" required style={ { backgroundColor: '#f1f3f4', color: '#3f4064' } } onChange={ event => {
										setEmail(event.target.value)
									}}/>
									<label htmlFor="text" className="label-name"></label>
								</div>
							</div>
							<Button className='mx-2 w-auto' appearance="default" disabled={ email ? false : true} >
								<span className='m-0' style={ { paddingRight: 11 } } >
									send
								</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer