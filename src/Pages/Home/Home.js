import Slider from "./Slider/Slider";
import OfferCategory from "./OfferCategory/OfferCategory";
import FasheCategories from "./Fashe Categories/FasheCategories";
import Awesome from "./Awesome/Awesome";
import FasheOffer from "./Fashe Offer/FasheOffer";
import Brands from "./Brands/Brands";

function Home () {
	return (
		<>
			<Slider />
			<OfferCategory />
			<FasheCategories />
			<Awesome />
			<FasheOffer />
			<Brands />
		</>
	)
}

export default Home