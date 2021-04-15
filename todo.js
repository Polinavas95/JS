const toDoform = document.querySelector('.js-toDoForm'),
    toDoinput = toDoform.querySelector('input'),
    toDolist = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

function showToDos (text) {
    console.log('text', text);
}

function submitHandler(event) {
    event.preventDefault();
    // сохраняем введённое пользователем в input значение и отображаем в ф-ии showToDos
    const currentValue = toDoinput.value;
    showToDos(currentValue);
}

function loadtoDos () {
    const todos = localStorage.getItem(TODOS_LS);
    todos !== null ? askForUsername() : '';
}

function init () {
    loadtoDos();
    toDoform.addEventListener('submit', submitHandler);
}

init();