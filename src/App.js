import Navbar from "./Component/Navbar/Navbar";

import { useRoutes } from 'react-router-dom'
import routes from './Routes'

function App() {
	
	const router = useRoutes(routes)
	
    return (
        <div>
	        <Navbar />
	        { router }
        </div>
    );
}

export default App;
