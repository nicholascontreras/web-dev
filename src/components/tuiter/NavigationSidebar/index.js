import React from "react";

import "../css/index.css";

const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <>
            <div class="list-group">
                <div class="list-group-item">
                    <i class="fa-brands fa-twitter"></i>
                </div>
                <a href="home.html" className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa-solid fa-house-chimney"></i>
                    <span className="d-none d-xl-inline">Home</span>
                </a>
                <a href="explore.html" className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa-solid fa-hashtag"></i>
                    <span className="d-none d-xl-inline">Explore</span>
                </a>
                <a href="notifications.html" className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
                    <i className="fa-solid fa-bell"></i>
                    <span className="d-none d-xl-inline">Notifications</span>
                </a>
                <a href="messages.html" className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
                    <i className="fa-solid fa-envelope"></i>
                    <span className="d-none d-xl-inline">Messages</span>
                </a>
                <a href="bookmarks.html" className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
                    <i className="fa-solid fa-bookmark"></i>
                    <span className="d-none d-xl-inline">Bookmarks</span>
                </a>
                <a href="lists.html" className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
                    <i className="fa-solid fa-list"></i>
                    <span className="d-none d-xl-inline">Lists</span>
                </a>
                <a href="profile.html" className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fa-solid fa-user"></i>
                    <span className="d-none d-xl-inline">Profile</span>
                </a>
                <a href="more.html" className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-ellipsis stack-icon text-light"></i>
                    <span className="d-none d-xl-inline">More</span>
                </a>
            </div>

            <form>
                <button type="button" className="btn btn-primary form-control rounded-pill mt-2">Tuit</button>
            </form>
        </>
    );
}
export default NavigationSidebar;