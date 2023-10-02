// 取得搜尋按鈕相關元素
const searchGroup = document.getElementById('search-group');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchBtnClose = document.getElementById('search-btn-close');

searchBtn.addEventListener('click', function() {
   // 檢查是否包含 "active" 類
   if (searchBtn.classList.contains('active')) {
     // 執行頁面跳轉
     window.location.href = "./allcourses.html?keyword=" + searchInput.value;
   } else {
     // 新增 "active" 類別
     searchGroup.classList.add('active');
   }
});

// 給 #searchBtnClose 按鈕添加點擊事件
searchBtnClose.addEventListener('click', function() {
  searchGroup.classList.remove('active');
});