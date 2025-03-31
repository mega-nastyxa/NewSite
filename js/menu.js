const menuButton = document.getElementById('menuButton');
const menuBar = document.getElementById('menuBar');
let timeoutId;

// Показать меню при наведении на кнопку
menuButton.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId); // Очищаем таймер, если он установлен
    menuBar.classList.add('visible');
});

// Скрыть меню, когда мышь покидает кнопку
menuButton.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
        menuBar.classList.remove('visible');
    }, 300); // Задержка в 200 мс
});

// Показать меню, когда мышь над меню
menuBar.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId); // Очищаем таймер, если он установлен
    menuBar.classList.add('visible');
});

// Скрыть меню, когда мышь покидает меню
menuBar.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
        menuBar.classList.remove('visible');
    }, 300); // Задержка в 200 мс
});