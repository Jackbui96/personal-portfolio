import './App.css'
import { useLocation } from "react-router-dom";
import Portfolio from "./pages/Portfolio.jsx";
import { useEffect } from "react";
import { trackVisit } from "./api-clients/client.jsx";


function App() {
    const location = useLocation();

    useEffect(() => {
        trackVisit()
    }, [location.pathname]);

    return (
        <div>
            <Portfolio/>
        </div>
    )
}

export default App
