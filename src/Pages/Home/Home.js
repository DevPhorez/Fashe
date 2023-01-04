import Slider from "./Slider/Slider";
import OfferCategory from "./OfferCategory/OfferCategory";
import FasheCategories from "./Fashe Categories/FasheCategories";
import Awesome from "./Awesome/Awesome";
import FasheOffer from "./Fashe Offer/FasheOffer";
import Brands from "./Brands/Brands";
import Readings from "./Readings/Readings";

function Home () {
	return (
		<div>
			<Slider />
			<OfferCategory />
			<FasheCategories />
			<Awesome />
			<div style={ { padding: '0 2rem' } }>
				<img className='img-fluid' src="/Images/offer 3.jpg" alt="offer 3" style={ { borderRadius: 16 } }/>
			</div>
			<FasheOffer />
			<Brands />
			<div className="container-fluid mb-5">
				<div className="row" style={ { padding: '0 1.25rem' } }>
					<div className="col-md-6 col-12">
						<img className='img-fluid mb-md-0 mb-3' src="/Images/offer 1.jpg" alt="offer 1" style={ { borderRadius: 16 } }/>
					</div>
					<div className="col-md-6 col-12">
						<img className='img-fluid' src="/Images/offer 2.jpg" alt="offer 1" style={ { borderRadius: 16 } }/>
					</div>
				</div>
			</div>
			<Readings />
		</div>
	)
}

export default Home