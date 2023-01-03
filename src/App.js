
import { useRoutes } from 'react-router-dom'
import routes from './Routes'

import Navbar from "./Component/Navbar/Navbar";
import Footer from './Component/Footer/Footer'

function App() {
	
	const router = useRoutes(routes)
	
    return (
        <div>
	        <Navbar />
	        { router }
	        <Footer />
        </div>
    );
}

export default App;
