// 获取左右箭头和图片元素
const leftArrow = document.querySelector('.left-icon');
const rightArrow = document.querySelector('.right-icon');
const image = document.querySelector('.avatar');

// 定义图片数组和当前图片索引
const images = ['./image/cat1.png', './image/cat2.png', '../image/cat3.png'];
let currentIndex = 0;

// 监听左箭头点击事件
leftArrow.addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  image.src = images[currentIndex];
});

// 监听右箭头点击事件
rightArrow.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
});