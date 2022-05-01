import React, {useState} from "react"
import {Link, useNavigate} from "react-router-dom";
import {logoutUser} from "../../services/users-service";
import {useDispatch, useSelector} from "react-redux";
import {clearSession} from "../../actions/session-actions";

const Navbar = () => {
    const loggedIn = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, setState] = useState({quickSearchText: ""});

    const attemptQuickSearch = () => {
        if (state["quickSearchText"]) {
            navigate("/search?name=" + state["quickSearchText"]);
        }
    };

    const attemptLogoutUser = () => {
        logoutUser().then(() => {
            dispatch(clearSession());
            navigate("/login");
        });
    };

    return (
        <>
            <nav className="navbar navbar-expand fixed-top navbar-dark bg-dark pr-5 pl-5">
                <Link className="navbar-brand" to="/">
                    <img src="/favicon.ico" className="d-inline-block align-top navbar-logo" alt=""/>
                    <h3 className="d-inline align-middle ml-3">Factorio Prints</h3>
                </Link>

                <div className="navbar-collapse collapse">
                    <div className="navbar-nav mr-auto">
                        <form className="nav-item form-inline ml-3 pl-3 border-left">
                            <input className="form-control" type="search" placeholder="Quick Search" aria-label="Quick Search"
                                   value={state["quickSearchText"]} onChange={(event) => {
                                       setState((prevState) => ({...prevState, quickSearchText: event.target.value}))
                            }}/>
                            <button className="btn btn-outline-primary ml-1" type="button" onClick={attemptQuickSearch}>Search</button>
                        </form>

                        {/*<Link className="nav-item nav-link ml-3 pl-3 border-left" to="/search">Advanced Search</Link>*/}
                    </div>

                    <div className="navbar-nav ml-auto">
                        {loggedIn && <button className="nav-item btn btn-link" onClick={attemptLogoutUser}>({loggedIn["username"]}) Log Out</button>}
                        {!loggedIn && <Link className="nav-item nav-link" to="/login">Login</Link>}
                    </div>
                </div>
            </nav>
            <div className="mb-5">
            </div>
            <br/>
            <div className="mb-2">
            </div>
        </>
    );
};

export default Navbar;