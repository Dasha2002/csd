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
                textSum.classList.add("active");
                updateDisplay();
            });

            btnMinus.addEventListener("click", () => {
                if (currentValue >= 5000) {
                    currentValue -= 5000;
                    textSum.classList.add("active");
                    updateDisplay();
                }
            });
        }
    });
});

// video кнопка перехода на страницу отзывы
document.addEventListener("DOMContentLoaded", () => {
    const reviewsBtns = document.querySelectorAll(".reviews-btn");
    reviewsBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = "reviws.php";
        });
    });
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
document.addEventListener('DOMContentLoaded', () => {

  const servicesSwiper = new Swiper('.services-swiper', {
    slidesPerView: 'auto',   
    spaceBetween: 10,        
    allowTouchMove: false,
    loop: false,
    speed: 500,
  });

  servicesSwiper.update();

  const dots = document.querySelectorAll('.carousel-indicators .dot');

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = Number(dot.dataset.index);

      servicesSwiper.slideTo(index);

      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });

});





// video карусель
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 650) {
    new Swiper(".reviews-swiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      freeMode: true,
      grabCursor: true,
      centeredSlides: false,
      touchEventsTarget: "container",
      
      breakpoints: {
        0: { slidesPerView: 1.1 },
        480: { slidesPerView: 1.3 },
        600: { slidesPerView: 1.5 },
      },
    });
  }
});




