import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";
import "./App.css";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Login/Register";
import {createStore} from "redux";
import sessionReducer from "./reducers/session-reducer";
import {Provider} from "react-redux";
import Blueprint from "./components/Blueprint";
import Profile from "./components/Profile";
import Search from "./components/Search";

const store = createStore(sessionReducer);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar/>
                <div className="container mb-5">
                    <Routes>
                        <Route path="*" element={<Homepage/>}/>
                        <Route path="blueprint/:blueprint_key" element={<Blueprint/>}/>
                        <Route path="profile" element={<Profile/>}>
                            <Route path=":userId" element={<Profile/>}/>
                        </Route>
                        <Route path="search" element={<Search/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}


export default App;