// animations.js - 为网站添加动画效果

document.addEventListener('DOMContentLoaded', function () {
    // 初始化所有动画
    initScrollAnimations();
    initTextAnimations();
    setupCounters();
    initImageAnimations();
    initHoverEffects();
});

// 滚动动画
function initScrollAnimations() {
    // 获取所有需要添加滚动动画的元素
    const animElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right, .zoom-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animElements.forEach(element => {
        observer.observe(element);
    });
}

// 文字动画
function initTextAnimations() {
    // 获取所有需要添加文字动画的元素
    const textElements = document.querySelectorAll('.text-animate');

    textElements.forEach(element => {
        // 获取原始文本
        const text = element.textContent;
        // 清空元素
        element.textContent = '';

        // 为每个字符创建一个span
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.animationDelay = `${i * 0.05}s`;
            span.classList.add('char');
            element.appendChild(span);
        }
    });

    // 观察元素并触发动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    textElements.forEach(element => {
        observer.observe(element);
    });
}

// 数字计数器动画
function setupCounters() {
    const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2秒内完成计数
                const stepTime = 20; // 每20毫秒更新一次
                const steps = duration / stepTime;
                const increment = target / steps;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    counter.textContent = Math.floor(current);

                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    }
                }, stepTime);

                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// 图片动画
function initImageAnimations() {
    const images = document.querySelectorAll('.img-reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    images.forEach(image => {
        observer.observe(image);
    });
}

// 悬停效果
function initHoverEffects() {
    // 添加卡片悬停效果
    const cards = document.querySelectorAll('.hover-effect');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.classList.add('hover');
        });

        card.addEventListener('mouseleave', function () {
            this.classList.remove('hover');
        });
    });
} 