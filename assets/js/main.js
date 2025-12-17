// questions переключатель для вопросов
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".questions .item");

    // Проверяем, есть ли вообще вопросы на странице
    if (items.length > 0) {
        items.forEach(item => {
            const question = item.querySelector(".question");
            const arrow = item.querySelector(".arrow img");
            const answer = item.querySelector(".answer");

            if (question) {
                question.addEventListener("click", () => {
                    const isOpen = item.classList.contains("expanded");

                    // Закрываем все перед открытием
                    items.forEach(i => {
                        i.classList.remove("expanded");
                        const ans = i.querySelector(".answer");
                        const arr = i.querySelector(".arrow img");

                        if (ans) ans.style.maxHeight = "0px";
                        if (arr) arr.src = "/assets/img/btn.svg";
                    });

                    // Если текущий был открыт — просто закрываем
                    if (isOpen) return;

                    // Открываем текущий
                    item.classList.add("expanded");

                    if (answer) {
                        answer.style.maxHeight = answer.scrollHeight + "px";
                    }
                });
            }
        });
    }
});

// base база знаний
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".view-all-link");
    const extra = document.querySelector(".extra-articles");
    const targetBlock = document.querySelector(".articles-grid");

    // Проверяем все необходимые элементы
    if (btn && extra && targetBlock) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const isOpening = !extra.classList.contains("open");
            extra.classList.toggle("open");

            // Меняем текст кнопки
            btn.textContent = isOpening ? "Скрыть" : "Посмотреть все статьи";

            // Если мы закрываем блок → прокручиваем вверх
            if (!isOpening) {
                window.setTimeout(() => {
                    targetBlock.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 200);
            }
        });
    }
});

// pop-up block
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup-block");
    
    // Если попапа нет на странице - выходим
    if (!popup) return;

    const openButtons = document.querySelectorAll(".btn-header-consult, .btn-footer, .btn-get-consult, .btn-application, .btn-bunk, .btn-bunk-5, .btn-services, [data-open-popup]");
    const closeBtn = document.querySelector("#popup-block .btn-close button");
    let lastScrollY = 0;

    function openPopup() {
        lastScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        document.documentElement.classList.add("popup-open");
        document.body.classList.add("popup-open");
        popup.style.display = "flex";
    }

    function closePopup() {
        document.documentElement.classList.remove("popup-open");
        document.body.classList.remove("popup-open");
        popup.style.display = "none";
        window.scrollTo(0, lastScrollY);
    }

    // Вешаем открытие на кнопки
    openButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            openPopup();
        });
    });

    // Закрытие крестиком
    if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            closePopup();
        });
    }

    // ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && popup.style.display === "flex") {
            closePopup();
        }
    });

    // Клик по фону
    popup.addEventListener("click", (e) => {
        if (e.target === popup) closePopup();
    });
});

// Счетчик (сумма всех долгов)
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".sum-inner");

    counters.forEach(counter => {
        const btnPlus = counter.querySelector(".btnPlus");
        const btnMinus = counter.querySelector(".btnMinus");
        const textSum = counter.querySelector(".counter-label");

        // Проверяем все элементы счетчика
        if (btnPlus && btnMinus && textSum) {
            let currentValue = 0;

            function updateDisplay() {
                textSum.textContent = currentValue;
            }

            btnPlus.addEventListener("click", () => {
                currentValue += 5000;
                updateDisplay();
            });

            btnMinus.addEventListener("click", () => {
                if (currentValue >= 5000) {
                    currentValue -= 5000;
                    updateDisplay();
                }
            });
        }
    });
});

// video кнопка перехода на страницу отзывы
document.addEventListener("DOMContentLoaded", () => {
    const reviewsBtn = document.getElementById("reviews-btn");
    if (reviewsBtn) {
        reviewsBtn.addEventListener("click", () => {
            window.location.href = "reviws.php";
        });
    }
});

// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');

    // Проверяем, что элементы существуют (есть на текущей странице)
    if (hamburgerMenu && mobileNav) {
        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Закрывать меню при клике на ссылку
        const mobileLinks = document.querySelectorAll('.mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerMenu.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }
});

// КАРУСЕЛЬ для услуг 
const container = document.querySelector('.block-two-mobile');
if (container) { // Проверяем, существует ли контейнер
    const track = container.querySelector('.carousel-track');
    const dots = container.querySelectorAll('.dot');
    const items = [...track.children];

    if (track && dots.length > 0 && items.length > 0) {
        let currentIndex = 0;

        function getStep() {
            const w = items[0].offsetWidth;
            const gap = parseFloat(getComputedStyle(track).gap);
            return w + gap;
        }

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * getStep()}px)`;
            dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
        }

        // КЛИКИ по кружкам
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                currentIndex = +dot.dataset.index;
                updateCarousel();
            });
        });

        updateCarousel();
    }
}

// карусель для видео в мобильной версии
const slider = document.querySelector('.main-block-mob .block');
if (slider) { // Проверяем, существует ли слайдер
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });

    /* Touch события для телефонов */
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('touchmove', (e) => {
        const x = e.touches[0].clientX;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}