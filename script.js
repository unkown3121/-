// Ждем, пока вся страница загрузится
document.addEventListener("DOMContentLoaded", () => {
    // Находим все элементы таймлайна
    const items = document.querySelectorAll('.timeline-item');

    // Настраиваем "наблюдателя" за скроллом
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Если элемент появился на экране, добавляем ему класс show
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2 // Элемент появится, когда на 20% покажется на экране
    });

    // Указываем наблюдателю следить за каждым элементом
    items.forEach(item => {
        observer.observe(item);
    });
});
