// 获取 DOM 元素
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');

// 模拟搜索数据
const mockData = [
    'HTML 教程',
    'CSS 样式指南',
    'JavaScript 入门',
    'React 框架学习',
    'Vue.js 实战',
    'Node.js 后端开发'
];

// 搜索功能
function performSearch() {
    const keyword = searchInput.value.trim();
    
    if (!keyword) {
        alert('请输入搜索内容');
        return;
    }
    
    // 模拟搜索结果
    const results = mockData.filter(item => 
        item.toLowerCase().includes(keyword.toLowerCase())
    );
    
    // 显示搜索结果
    displayResults(results, keyword);
}

// 显示搜索结果
function displayResults(results, keyword) {
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="result-item">未找到相关内容</div>';
    } else {
        results.forEach(item => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.textContent = item;
            searchResults.appendChild(div);
        });
    }
    
    searchResults.classList.add('active');
}

// 绑定事件
searchBtn.addEventListener('click', performSearch);

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});