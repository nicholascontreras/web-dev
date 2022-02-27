const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item d-flex">
        <img src="${who.avatarIcon}" class="profile-img rounded-circle">
        <span class="flex-fill ms-3 "><b>${who.userName}</b> <i class="fa-solid fa-circle-check "></i><br><span class="text-secondary ">@${who.handle}</span></span>
        <div class="badge bg-primary rounded-pill my-auto py-2">
            </span>Follow</span>
        </div>
    </li>
    `);
}
export default WhoToFollowListItem;