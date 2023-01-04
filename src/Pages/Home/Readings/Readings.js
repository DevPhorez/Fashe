import './Readings.css'

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

function Readings () {
	return (
		<div className='container-fluid readings'>
			<div className="d-flex justify-content-between align-items-center mb-3">
				<h4>Readings</h4>
				<div className='more'>
					<span>More</span>
					<MdOutlineKeyboardArrowRight fontSize={24} />
				</div>
			</div>
			<div className="row">
				<div className="col-3">
					<div className="card">
						<img src="/Images/Readings/1.jpg" alt="Review of the second generation of Apple Pencil touch pen; Expensive but wonderful"/>
						<p>
							Review of the second generation of Apple Pencil touch pen; Expensive but wonderful
						</p>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<img src="/Images/Readings/2.jpg" alt="The Galaxy A34 will not be significantly different from the Galaxy A33"/>
						<p>
							The Galaxy A34 will not be significantly different from the Galaxy A33
						</p>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<img src="/Images/Readings/3.jpg" alt="The iPhone 15 Pro will have a titanium body and 8 GB of RAM"/>
						<p>
							The iPhone 15 Pro will have a titanium body and 8 GB of RAM
						</p>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<img src="/Images/Readings/4.jpg" alt="Mac MC12 backpack; Strong material and clean stitching, but dry and inflexible"/>
						<p>
							Mac MC12 backpack; Strong material and clean stitching, but dry and inflexibleRAM
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Readings