import './FasheCategories.css'
import { Link } from "react-router-dom";

function FasheCategories () {
	return (
		<div className='container-fluid fashe-categories text-center'>
			<h3>Fashe<b className='text-danger fw-bold fs-1'>.</b> Categories</h3>
			<div className="row px-1 px-md-2 px-lg-4 mt-2 justify-content-center">
				<div className="col-3 col-md-2 px-1 px-md-2 px-lg-4 mb-3">
					<Link to=''>
						<img className='img-fluid' src="/Images/fashe categories/1.png" alt="Toys & Children"/>
						<p className='d-none d-md-block'>Toys & Children</p>
					</Link>
				</div>
				<div className="col-3 col-md-2 px-1 px-md-2 px-lg-4 mb-3">
					<Link to=''>
						<img className='img-fluid' src="/Images/fashe categories/2.png" alt="Supermarket products"/>
						<p className='d-none d-md-block'>Supermarket Products</p>
					</Link>
				</div>
				<div className="col-3 col-md-2 px-1 px-md-2 px-lg-4 mb-3">
					<Link to=''>
						<img className='img-fluid' src="/Images/fashe categories/3.png" alt="Fashion & Clothing"/>
						<p className='d-none d-md-block'>Fashion & Clothing</p>
					</Link>
				</div>
				<div className="col-3 col-md-2 px-1 px-md-2 px-lg-4 mb-3">
					<Link to=''>
						<img className='img-fluid' src="/Images/fashe categories/4.png" alt="Industrial Tools & Equipment"/>
						<p className='d-none d-md-block'>Industrial Tools & Equipment</p>
					</Link>
				</div>
				<div className="col-3 col-md-2 px-1 px-md-2 px-lg-4 mb-3">
					<Link to=''>
						<img className='img-fluid' src="/Images/fashe categories/5.png" alt="Phone"/>
						<p className='d-none d-md-block'>Phone</p>
					</Link>
				</div>
				<div className="col-3 col-md-2 px-1 px-md-2 px-lg-4 mb-3">
					<Link to=''>
						<img className='img-fluid' src="/Images/fashe categories/6.png" alt="Digital Goods"/>
						<p className='d-none d-md-block'>Digital Goods</p>
					</Link>
				</div>
				<div className="col-3 col-md-2 px-1 px-md-2 px-lg-4 mb-3">
					<Link to=''>
						<img className='img-fluid' src="/Images/fashe categories/7.png" alt="Trip & Sport"/>
						<p className='d-none d-md-block'>Trip & Sport</p>
					</Link>
				</div>
				<div className="col-3 col-md-2 px-1 px-md-2 px-lg-4 mb-3">
					<Link to=''>
						<img className='img-fluid' src="/Images/fashe categories/8.png" alt="Books, Stationery & Art"/>
						<p className='d-none d-md-block'>Books, Stationery & Art</p>
					</Link>
				</div>
				<div className="col-3 col-md-2 px-1 px-md-2 px-lg-4 mb-3">
					<Link to=''>
						<img className='img-fluid' src="/Images/fashe categories/9.png" alt="Home & Kitchen"/>
						<p className='d-none d-md-block'>Home & Kitchen</p>
					</Link>
				</div>
				<div className="col-3 col-md-2 px-1 px-md-2 px-lg-4 mb-3">
					<Link to=''>
						<img className='img-fluid' src="/Images/fashe categories/10.png" alt="Beauty & Health"/>
						<p className='d-none d-md-block'>Beauty & Health</p>
					</Link>
				</div>
				<div className="col-3 col-md-2 px-1 px-md-2 px-lg-4 mb-3">
					<Link to=''>
						<img className='img-fluid' src="/Images/fashe categories/11.png" alt="Native & Local Products"/>
						<p className='d-none d-md-block'>Native & Local Products</p>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default FasheCategories