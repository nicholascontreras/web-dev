import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import BlueprintGrid from "./components/BlueprintGrid";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<BlueprintGrid/>}>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;