const NavigationSidebar = () => {
    return (`
        <div class="list-group">
            <div class="list-group-item">
                <i class="fa-brands fa-twitter"></i>
            </div>
            <a href="home.html" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-house-chimney"></i>
                <span class="d-none d-xl-inline">Home</span>
            </a>
            <a href="explore.html" class="list-group-item list-group-item-action active">
                <i class="fa-solid fa-hashtag"></i>
                <span class="d-none d-xl-inline">Explore</span>
            </a>
            <a href="notifications.html" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-bell"></i>
                <span class="d-none d-xl-inline">Notifications</span>
            </a>
            <a href="messages.html" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-envelope"></i>
                <span class="d-none d-xl-inline">Messages</span>
            </a>
            <a href="bookmarks.html" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-bookmark"></i>
                <span class="d-none d-xl-inline">Bookmarks</span>
            </a>
            <a href="lists.html" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-list"></i>
                <span class="d-none d-xl-inline">Lists</span>
            </a>
            <a href="profile.html" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-user"></i>
                <span class="d-none d-xl-inline">Profile</span>
            </a>
            <a href="more.html" class="list-group-item list-group-item-action">
                <i class="fas fa-circle"></i>
                <i class="fas fa-ellipsis stack-icon text-light"></i>
                <span class="d-none d-xl-inline">More</span>
            </a>
        </div>

        <form>
            <button type="button" class="btn btn-primary form-control rounded-pill mt-2">Tuit</button>
        </form>
    `);
}
export default NavigationSidebar;