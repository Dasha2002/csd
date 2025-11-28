
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
            setTimeout(() => {
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
  const openBtn = document.querySelector(".btn-header-consult");
  const closeBtn = document.querySelector("#popup-block .btn-close button");
  const overlaySelector = document.body; // будем управлять классами на body + html
  let scrollY = 0;

  function openPopup() {
    document.documentElement.classList.add("popup-open");
    document.body.classList.add("popup-open");
    document.getElementById("popup-block").style.display = "flex";
}

function closePopup() {
    document.documentElement.classList.remove("popup-open");
    document.body.classList.remove("popup-open");
    document.getElementById("popup-block").style.display = "none";
}


  // Открытие
  if (openBtn) {
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openPopup();
    });
  }

  // Закрытие — кнопка крестик
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      closePopup();
    });
  } else {
    // отладочная подсказка для dev: если не найдена кнопка
    console.warn("Кнопка закрытия попапа не найдена по селектору '#popup-block .btn-close button'");
  }

  // Закрытие по нажатию ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (popup.style.display === "flex") closePopup();
    }
  });

  // Закрытие при клике по фоновой области (не по внутреннему .block)
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      closePopup();
    }
  });

});




