const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  if (login === '' || password === '') {
    alert('Заполните все поля!');
    return;
  }

  // Здесь можно добавить дополнительную валидацию, например, проверку длины пароля

  // Отправка формы на сервер
});