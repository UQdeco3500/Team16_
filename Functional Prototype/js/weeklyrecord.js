let imageCount = localStorage.getItem("imageCount") || 0; // 获取图片数量，如果没有则默认为0
let imageCountElement = document.getElementById("image-count");
imageCountElement.innerHTML = imageCount;