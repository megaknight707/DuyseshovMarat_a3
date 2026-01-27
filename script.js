
function showMessage() {
    const messageElement = document.getElementById('message');
    const message = 'JavaScript работает!';
    messageElement.textContent = message;
    messageElement.style.color = 'green';
    messageElement.style.fontWeight = 'bold';
    console.log('Кнопка нажата успешно');
}

// Сообщение при загрузке страницы
window.addEventListener('load', function() {
    console.log('Страница полностью загружена');
    console.log('Все инструменты работают!');
});