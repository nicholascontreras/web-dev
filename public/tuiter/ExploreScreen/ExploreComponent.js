import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return (`
        <form>
            <div class="form-group d-flex mb-2">
                <div class="icon-inside-input-container flex-grow-1">
                    <input type="text" class="form-control rounded-pill" placeholder="Search Tuiter">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <i class="fa-solid fa-gear settings-button my-auto ms-3 text-primary"></i>
            </div>
        </form>

        <ul class="nav nav-tabs mb-1">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        
        <div class="on-image-caption-container">
            <img src="../images/starship.jpg " class="img-fluid ">
            <span class="fs-3 ms-2 text-light"><b>SpaceX's Starship</b></span>
        </div>

        ${PostSummaryList()}
    `);
}
export default ExploreComponent;