document.addEventListener('DOMContentLoaded', () => {
    // 页面加载动画
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = `
        <div class="loader-inner">
            <div class="spinner"></div>
            <p>Loading...</p>
        </div>
    `;
    document.body.appendChild(loader);

    window.onload = () => {
        document.body.removeChild(loader);
    };

    // 滚动效果：导航栏背景色改变
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 交互功能：点击新闻标题展开内容
    const toggleExpand = (selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.addEventListener('click', () => {
                element.classList.toggle('expanded');
            });
        });
    };

    // 应用到所有需要展开的内容
    toggleExpand('#latest-news article');
    toggleExpand('#update-log article');
    toggleExpand('#task-guides article');
    toggleExpand('#game-tips article');

    // 动态的导航栏效果
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.backgroundColor = '#e60012';
            link.style.color = '#fff';
        });
        link.addEventListener('mouseleave', () => {
            link.style.backgroundColor = '';
            link.style.color = '';
        });
    });

    // 滚动到顶部按钮
    const toTopButton = document.createElement('button');
    toTopButton.id = 'toTopButton';
    toTopButton.innerText = '↑';
    document.body.appendChild(toTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    });

    toTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 处理评论表单提交
    const commentForm = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('commenterName').value;
        const text = document.getElementById('commentText').value;

        const newComment = document.createElement('article');
        const commentTitle = document.createElement('h3');
        commentTitle.textContent = `${name}的评论`;
        const commentBody = document.createElement('p');
        commentBody.textContent = text;

        newComment.appendChild(commentTitle);
        newComment.appendChild(commentBody);
        commentList.appendChild(newComment);

        commentForm.reset();
    });
});



