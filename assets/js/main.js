
// questions переключатель для вопросов

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".questions .item");

    items.forEach(item => {
        const arrow = item.querySelector(".arrow");

        if (!arrow) return;

        arrow.addEventListener("click", () => {
            
            // Если открыт закрываем
            if (item.classList.contains("expanded")) {
                item.classList.remove("expanded");

                const answer = item.querySelector(".answer");
                if (answer) answer.classList.remove("visible");

                return;
            }

            // Закрываем другие открытые
            items.forEach(i => {
                i.classList.remove("expanded");
                const a = i.querySelector(".answer");
                if (a) a.classList.remove("visible");
            });

            // Открываем текущий
            item.classList.add("expanded");

            const answer = item.querySelector(".answer");
            if (answer) answer.classList.add("visible");
        });
    });
});
