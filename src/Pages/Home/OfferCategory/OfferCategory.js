import './OfferCategory.css'
import { Link } from "react-router-dom";

import { Tooltip, Whisper } from 'rsuite';

function OfferCategory () {
	return (
		<div className='container-fluid offer-category'>
			<div className="row px-3 text-center">
				<div className="col-12 col-md-6 col-lg-3 px-2 mb-3 mb-lg-0">
					<Link to=''>
						<Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={<Tooltip>Oil & Rice Campaign</Tooltip>}>
							<img className='img-fluid' src="/Images/offer category/1.jpg" alt="Oil & Rice Campaign"/>
						</Whisper>
					</Link>
				</div>
				<div className="col-12 col-md-6 col-lg-3 px-2 mb-3 mb-lg-0">
					<Link to=''>
						<Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={<Tooltip>Personal Electrical Appliances</Tooltip>}>
							<img className='img-fluid' src="/Images/offer category/2.jpg" alt="Personal Electrical Appliances"/>
						</Whisper>
					</Link>
				</div>
				<div className="col-12 col-md-6 col-lg-3 px-2 mb-3 mb-md-0">
					<Link to=''>
						<Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={<Tooltip>Clean up & Partnership</Tooltip>}>
							<img className='img-fluid' src="/Images/offer category/3.jpg" alt="Clean up & Partnership"/>
						</Whisper>
					</Link>
				</div>
				<div className="col-12 col-md-6 col-lg-3 px-2">
					<Link to=''>
						<Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={<Tooltip>Boot & Half Boot</Tooltip>}>
							<img className='img-fluid' src="/Images/offer category/4.jpg" alt="Boot & Half Boot"/>
						</Whisper>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default OfferCategory