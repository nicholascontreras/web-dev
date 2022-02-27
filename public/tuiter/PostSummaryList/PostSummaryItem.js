const PostSummaryItem = (post) => {
    return (`
    <div class="list-group">
        <div class="list-group-item d-flex">
            <div class="flex-fill">
                <p class="text-secondary mb-0">${post.topic}</p>
                <p class="mb-0"><b>${post.userName}</b> <i class="fa-solid fa-circle-check "></i> - <span class="text-secondary">${post.time}</span></p>
                <p class="mb-0">${post.title}</p>
            </div>

            <img src="${post.image}" class="tuit-preview-image rounded-3">
        </div>
    </div>
    `);
}
export default PostSummaryItem;