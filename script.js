const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(registrationForm);

  // Проверка на пустые поля
  for (const field of formData.entries()) {
    if (!field[1]) {
      alert(`Поле "${field[0]}" не может быть пустым`);
      return;
    }
  }

  // Проверка паролей на совпадение
  const password = formData.get('password');
  const confirmPass = formData.get('confirm-password');
  if (password !== confirmPass) {
    alert('Пароли должны совпадать');
    return;
  }

  // Проверка на валидный формат почты
  const email = formData.get('email');
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    alert('Введите корректный адрес электронной почты');
    return;
  }

  // Проверка логина на наличие только английских букв
  const login = formData.get('login');
  const loginRegex = /^[A-Za-z]+$/;
  if (!loginRegex.test(login)) {
    alert('Логин должен содержать только английские буквы');
    return;
  }

  // Проверка пароля на длину не менее 8 символов
  if (password.length < 8) {
    alert('Пароль должен содержать не менее 8 символов');
    return;
  }

  // Если все проверки пройдены, можно отправлять данные на сервер
  // ...
});