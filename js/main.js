// 导航栏滚动效果
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// 页面加载时修复顶部额外空白区域和初始化移动端菜单
document.addEventListener('DOMContentLoaded', function () {
    // 获取所有页面头部区域元素
    const pageHeaders = document.querySelectorAll('section.bg-blue-600, header.bg-blue-800');

    // 如果找到页面头部元素，修改其顶部边距
    pageHeaders.forEach(header => {
        // 对于使用mt-16类的元素，移除额外的顶部边距
        if (header.classList.contains('mt-16')) {
            header.classList.remove('mt-16');
        }

        // 确保导航栏不会遮挡内容
        const navHeight = document.querySelector('nav').offsetHeight;
        header.style.paddingTop = `${navHeight}px`;
    });

    // 为所有卡片和可点击元素添加交互效果类
    document.querySelectorAll('.bg-white.rounded-lg.shadow-md').forEach(card => {
        card.classList.add('card');
    });

    // 为所有图片容器添加缩放效果
    document.querySelectorAll('.rounded-lg img').forEach(img => {
        const parent = img.parentElement;
        if (!parent.classList.contains('rounded-full')) {
            parent.classList.add('img-zoom');
        }
    });

    // 为所有按钮添加过渡效果
    document.querySelectorAll('a[class*="bg-"], button[class*="bg-"]').forEach(button => {
        if (!button.classList.contains('btn')) {
            button.classList.add('btn');
        }
    });

    // 为所有部分标题添加样式
    document.querySelectorAll('section h2').forEach(title => {
        if (!title.classList.contains('section-title')) {
            title.classList.add('section-title');
        }
    });

    // 初始化移动端菜单
    initMobileMenu();

    // 初始化动画元素
    initAnimations();

    // 初始化浮动联系按钮
    initFloatingContact();

    // 初始化浮动咨询窗口
    initConsultWindow();
});

// 初始化移动端菜单
function initMobileMenu() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('#mobile-menu-btn');
    const mobileMenu = document.querySelector('#mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.style.maxHeight = '1000px';
                mobileMenu.style.opacity = '1';
            } else {
                mobileMenu.style.maxHeight = '0';
                mobileMenu.style.opacity = '0';
            }
        });
    }

    // Mobile submenu toggles - 仅点击箭头图标时才展开子菜单
    const mobileSubMenuToggles = document.querySelectorAll('.mobile-submenu-toggle');

    mobileSubMenuToggles.forEach(toggle => {
        // 获取箭头图标
        const arrowIcon = toggle.querySelector('i.fas');

        if (arrowIcon) {
            // 只给箭头图标添加点击事件
            arrowIcon.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                const submenu = toggle.nextElementSibling;

                if (submenu && submenu.classList.contains('mobile-submenu')) {
                    // 关闭所有其他子菜单
                    document.querySelectorAll('.mobile-submenu:not(.hidden)').forEach(menu => {
                        if (menu !== submenu) {
                            menu.classList.add('hidden');
                            menu.style.maxHeight = '0';
                            menu.style.opacity = '0';

                            const icon = menu.previousElementSibling.querySelector('i');
                            if (icon) {
                                icon.classList.remove('fa-chevron-up');
                                icon.classList.add('fa-chevron-down');
                            }
                        }
                    });

                    // 切换当前子菜单
                    submenu.classList.toggle('hidden');

                    if (!submenu.classList.contains('hidden')) {
                        submenu.style.maxHeight = '500px';
                        submenu.style.opacity = '1';
                        arrowIcon.classList.remove('fa-chevron-down');
                        arrowIcon.classList.add('fa-chevron-up');
                    } else {
                        submenu.style.maxHeight = '0';
                        submenu.style.opacity = '0';
                        arrowIcon.classList.remove('fa-chevron-up');
                        arrowIcon.classList.add('fa-chevron-down');
                    }
                }
            });
        }

        // 主菜单项的链接保持默认行为，可以正常跳转
    });
}

// 初始化滚动动画
function initAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// 初始化浮动联系按钮
function initFloatingContact() {
    const floatingContact = document.querySelector('.floating-contact');

    if (floatingContact) {
        // 微信二维码弹窗
        const wechatButton = floatingContact.querySelector('.wechat-button');
        const wechatQRCode = floatingContact.querySelector('.wechat-qrcode');

        if (wechatButton && wechatQRCode) {
            wechatButton.addEventListener('click', function () {
                wechatQRCode.classList.toggle('hidden');
            });

            // 点击其他地方关闭二维码
            document.addEventListener('click', function (e) {
                if (!wechatButton.contains(e.target) && !wechatQRCode.contains(e.target)) {
                    wechatQRCode.classList.add('hidden');
                }
            });
        }

        // 电话拨打功能
        const phoneButton = floatingContact.querySelector('.phone-button');

        if (phoneButton) {
            phoneButton.addEventListener('click', function () {
                window.location.href = 'tel:+8613812345678';
            });
        }
    }
}

// 产品服务切换
function switchTab(tabId, element) {
    // 隐藏所有内容
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });

    // 显示选中的内容
    document.getElementById(tabId).classList.remove('hidden');

    // 移除所有标签的活跃状态
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active-tab');
    });

    // 添加当前标签的活跃状态
    element.classList.add('active-tab');
}

// 案例筛选
function filterCases(category) {
    // 显示或隐藏相应的案例项目
    const allCases = document.querySelectorAll('.case-item');

    allCases.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });

    // 更新筛选按钮的活跃状态
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// 表单分步功能
let currentStep = 1;
const totalSteps = 3;

function nextStep() {
    if (currentStep < totalSteps) {
        const currentStepElement = document.getElementById(`step-${currentStep}`);
        const nextStepElement = document.getElementById(`step-${currentStep + 1}`);

        if (currentStepElement && nextStepElement) {
            currentStepElement.style.opacity = '0';
            currentStepElement.style.transform = 'translateX(-20px)';

            setTimeout(() => {
                currentStepElement.classList.add('hidden');
                nextStepElement.classList.remove('hidden');

                setTimeout(() => {
                    nextStepElement.style.opacity = '1';
                    nextStepElement.style.transform = 'translateX(0)';
                }, 50);
            }, 300);

            currentStep++;
            updateProgressIndicator();
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        const currentStepElement = document.getElementById(`step-${currentStep}`);
        const prevStepElement = document.getElementById(`step-${currentStep - 1}`);

        if (currentStepElement && prevStepElement) {
            currentStepElement.style.opacity = '0';
            currentStepElement.style.transform = 'translateX(20px)';

            setTimeout(() => {
                currentStepElement.classList.add('hidden');
                prevStepElement.classList.remove('hidden');

                setTimeout(() => {
                    prevStepElement.style.opacity = '1';
                    prevStepElement.style.transform = 'translateX(0)';
                }, 50);
            }, 300);

            currentStep--;
            updateProgressIndicator();
        }
    }
}

function updateProgressIndicator() {
    for (let i = 1; i <= totalSteps; i++) {
        const stepElement = document.getElementById(`progress-step-${i}`);
        if (stepElement) {
            if (i < currentStep) {
                stepElement.classList.add('completed');
                stepElement.classList.remove('active');
            } else if (i === currentStep) {
                stepElement.classList.add('active');
                stepElement.classList.remove('completed');
            } else {
                stepElement.classList.remove('active', 'completed');
            }
        }
    }
}

// 检查元素是否在视口中
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('counter-container')) {
                startCounting();
            }
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

function startCounting() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;

        const updateCounter = () => {
            const currentValue = parseInt(counter.textContent);
            if (currentValue < target) {
                counter.textContent = Math.ceil(currentValue + increment);

                // 当数值接近目标值时，添加弹跳动画
                if (Math.ceil(currentValue + increment) >= target * 0.95) {
                    counter.classList.add('bounce');
                }

                setTimeout(updateCounter, 30);
            } else {
                counter.textContent = target;
                counter.classList.add('bounce');
            }
        };

        updateCounter();
    });
}

// 初始化浮动咨询窗口
function initConsultWindow() {
    const consultWindow = document.getElementById('consultWindow');
    const toggleBtn = document.getElementById('toggleBtn');

    if (consultWindow && toggleBtn) {
        // 存储咨询窗口当前状态
        let isVisible = true;

        // 切换按钮点击事件
        toggleBtn.addEventListener('click', function () {
            isVisible = !isVisible;
            updateConsultWindowState(isVisible);
        });

        // 初始状态设置
        updateConsultWindowState(isVisible);
    }

    function updateConsultWindowState(isVisible) {
        const consultWindow = document.getElementById('consultWindow');
        const toggleBtn = document.getElementById('toggleBtn');
        const arrow = toggleBtn.querySelector('i');

        if (isVisible) {
            consultWindow.style.transform = 'translateX(0)';
            arrow.classList.remove('fa-chevron-right');
            arrow.classList.add('fa-chevron-left');

            // 添加按钮出现动画
            const buttons = consultWindow.querySelectorAll('.w-12');
            buttons.forEach((btn, index) => {
                btn.style.transition = `transform 0.3s ease ${index * 0.1}s, background-color 0.3s ease`;
                btn.style.transform = 'scale(1)';
            });
        } else {
            consultWindow.style.transform = 'translateX(calc(100% - 10px))';
            arrow.classList.remove('fa-chevron-left');
            arrow.classList.add('fa-chevron-right');

            // 添加按钮消失动画
            const buttons = consultWindow.querySelectorAll('.w-12');
            buttons.forEach(btn => {
                btn.style.transform = 'scale(0.8)';
            });
        }
    }
}