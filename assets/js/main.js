


// questions переключатель для вопросов

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".questions .item");

    items.forEach(item => {
        const question = item.querySelector(".question");
        const arrow = item.querySelector(".arrow img");
        const answer = item.querySelector(".answer");

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
    });
});




// base базаз знаний

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".view-all-link");
    const extra = document.querySelector(".extra-articles");
    const targetBlock = document.querySelector(".articles-grid"); // ← первые 3 карточки

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
});


// pop-up block

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup-block");
  const openButtons = document.querySelectorAll(".btn-header-consult, .btn-footer, .btn-get-consult, .btn-application, .btn-bunk, .btn-bunk-5, .btn-services, [data-open-popup]");
  const closeBtn = document.querySelector("#popup-block .btn-close button");
  let lastScrollY = 0;

  function openPopup() {
    // сохраняем позицию — на случай, если нужно вернуть (мы не фиксируем body)
    lastScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    document.documentElement.classList.add("popup-open");
    document.body.classList.add("popup-open");

    popup.style.display = "flex";
  }

  function closePopup() {
    document.documentElement.classList.remove("popup-open");
    document.body.classList.remove("popup-open");

    popup.style.display = "none";

    // возвращаемся туда, где были — обычно не нужно, но оставим на всякий случай
    window.scrollTo(0, lastScrollY);
  }

  // Вешаем открытие на любую кнопку с указанными селекторами.
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
  } else {
    console.warn("Кнопка закрытия попапа не найдена по селектору '#popup-block .btn-close button'");
  }

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup.style.display === "flex") {
      closePopup();
    }
  });

  // Клик по фону (если кликнули по самому контейнеру #popup-block)
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
    });
});


// video кнопка перехода на страницу отзывы
document.getElementById("reviews-btn").addEventListener("click", () => {
    window.location.href = "reviws.php";
});


