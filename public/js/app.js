const formReg = document.querySelector('#form-reg');
formReg.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { login, password, method, action } = event.target;
  const res = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      login: login.value,
      password: password.value,
    }),
  });
});
