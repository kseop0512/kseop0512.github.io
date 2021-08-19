const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('.input-login');
const loginButton = loginForm.querySelector('.input-login-submit');
const loginResult = document.querySelector('.login-result');

const HIDDEN_CLASS = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASS);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  loginResult.classList.remove(HIDDEN_CLASS);
  loginResult.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
