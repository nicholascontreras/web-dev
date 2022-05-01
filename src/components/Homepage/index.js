import {Link, Route, Routes, useLocation} from "react-router-dom";
import {TopBlueprintsGrid, RecentBlueprintsGrid, BlueprintsWithFollowedCommentsGrid} from "../BlueprintsGrid";
import {useSelector} from "react-redux";

const Homepage = () => {
    const location = useLocation();
    const loggedIn = useSelector((state) => state);

    return(
        <>
            <ul className="nav nav-tabs">
                {
                    loggedIn &&
                    <>
                        <li className="nav-item ml-auto">
                            <Link
                                className={"nav-link" + ((location.pathname.endsWith("/followed") || location.pathname.endsWith("/")) ? " active" : "")}
                                to="/followed">Commented On</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link" + (location.pathname.endsWith("/top") ? " active" : "")} to="/top">Top Rated</Link>
                        </li>
                    </>
                }
                {
                    !loggedIn &&
                    <li className="nav-item ml-auto">
                        <Link className={"nav-link" + ((location.pathname.endsWith("/top") || location.pathname.endsWith("/")) ? " active" : "")} to="/top">Top Rated</Link>
                    </li>
                }
                <li className="nav-item">
                    <Link className={"nav-link" + (location.pathname.endsWith("/active") ? " active" : "")} to="/recent">Most Recent</Link>
                </li>
            </ul>

            <Routes>
                {
                    loggedIn &&
                    <>
                        <Route path="/" element={<BlueprintsWithFollowedCommentsGrid/>}/>
                        <Route path="/followed" element={<BlueprintsWithFollowedCommentsGrid/>}/>
                    </>
                }
                {
                    !loggedIn &&
                    <Route path="/" element={<TopBlueprintsGrid/>}/>
                }
                <Route path="/top" element={<TopBlueprintsGrid/>}/>
                <Route path="/recent" element={<RecentBlueprintsGrid/>}/>
            </Routes>
        </>
    );
}

export default Homepage;