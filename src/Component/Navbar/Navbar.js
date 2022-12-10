import * as React from 'react'

import './Navbar.css'

import { FiLogIn } from 'react-icons/fi'
import { FaSignOutAlt } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

import { Nav } from 'rsuite'
import RNavbar from 'rsuite/Navbar';


import { BiHomeSmile } from 'react-icons/bi'
import { FiShoppingBag } from 'react-icons/fi'
import { RiShoppingCartLine, RiContactsLine } from 'react-icons/ri'
import { MdOutlineArticle } from 'react-icons/md'

function CustomNavbar () {
	
	const [scrollY, setScrollY] = React.useState(0)
	
	window.addEventListener('scroll', () => {
		setScrollY(window.scrollY)
	})
	
	return (
		<RNavbar appearance="subtle">
			<Nav>
				<Nav.Item><BiHomeSmile fontSize={20} className='me-1' />Home</Nav.Item>
				<Nav.Item><FiShoppingBag fontSize={20} className='me-1' />Shop</Nav.Item>
				<Nav.Item><RiShoppingCartLine fontSize={20} className='me-1' />Product</Nav.Item>
				<Nav.Item><MdOutlineArticle fontSize={20} className='me-1' />Blog</Nav.Item>
				<Nav.Item><RiContactsLine fontSize={20} className='me-1' />Contact</Nav.Item>
			</Nav>
		</RNavbar>
	);
}


function Navbar () {
	
	const [scroll, setScroll] = React.useState(0)
	
	window.addEventListener('scroll', () => {
		setScroll(window.scrollY)
	})
	
	return (
		<div className='position-fixed w-100'>
			<nav className={`${ scroll > 50 && 'padding-animation' } navbar navbar-expand-lg bg-light nav-shadow nav-top`}>
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<img src="/Images/logo.png" alt="logo"/>
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
					        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					        aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					
					<div className="collapse navbar-collapse">
						<div className="form w-50">
							<input type="text" placeholder='Search...' name="text" autoComplete="off" required/>
							<label htmlFor="text" className="label-name"></label>
						</div>
						<div className="account ms-auto">
							<span className='line'>
								<CgProfile fontSize={24} />
							</span>
							<span>
								<FaSignOutAlt fontSize={24} />
							</span>
						</div>
					</div>
				</div>
			</nav>
			<nav className={`${ scroll > 50 && 'hide-animation' } navbar navbar-expand-lg bg-light d-sm-block d-none`}>
				<div className="container-fluid">
					<CustomNavbar />
				</div>
			</nav>
		</div>
	)
}

export default Navbar