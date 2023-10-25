document.addEventListener('DOMContentLoaded', function() {
    var postText = localStorage.getItem('postText');
    if (postText) {
        var postContainer = document.querySelector('.post-container');
        var newPost = document.createElement('div');
        newPost.className = 'post new-post';
        newPost.innerHTML = `
            <img src="./image/avatar1.png" alt="Avatar" class="post-avatar">
            <div class="post-content" style="text-align: left;"> <!-- 添加 text-align 样式 -->
                <h2 class="post-name">John Doe</h2>
                <p class="post-date">June 1, 2021</p>
                <p class="post-text">${postText}</p>
                <div class="post-icons">
                    <a href="#"><img src="./image/comment.png" alt="Comment icon"></a>
                    <a href="#"><img src="./image/like.png" alt="Like icon"></a>
                </div>
                <button id="delete-button">Delete</button>
            </div>
        `;
        postContainer.appendChild(newPost);

        var deleteButton = newPost.querySelector('#delete-button');
        deleteButton.addEventListener('click', function() {
            newPost.parentNode.removeChild(newPost);
        });
    }
});
