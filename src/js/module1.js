// Получаем элементы кнопки и textarea
const button = document.querySelector('.button');
const textarea = document.querySelector('.textarea');

// Переменная для отслеживания состояния
let isExpanded = false;

// Функция для переключения состояния textarea
const toggleTextarea = () => {
  if (isExpanded) {
    textarea.classList.add('textarea-animating');
    textarea.classList.remove('textarea-expand');
    setTimeout(() => {
      textarea.classList.remove('textarea-animating');
      textarea.classList.add('textarea-collapse');
    }, 500); // Время должно совпадать с длительностью анимации (0.5s)
  } else {
    textarea.classList.remove('textarea-collapse');
    textarea.classList.add('textarea-animating');
    setTimeout(() => {
      textarea.classList.remove('textarea-animating');
      textarea.classList.add('textarea-expand');
    }, 10); // Небольшая задержка, чтобы обеспечить выполнение transition
  }
  isExpanded = !isExpanded; // Переключаем состояние
};

// Добавляем обработчик клика по кнопке
button.addEventListener('click', toggleTextarea);
