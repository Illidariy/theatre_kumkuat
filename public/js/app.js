// forms
const formReg = document.querySelector('#form-reg');
const formLogin = document.querySelector('#form-login');
const formStudent = document.querySelector('#form-student');

// inputs
const regPass = document.querySelector('#input-regPass');
const regPassConf = document.querySelector('#input-regPassConf');

// divs
const feedback = document.querySelector('#feedback');

// check passwords
function isSamePass() {
  if (regPass.value !== regPassConf.value) {
    feedback.textContent = 'Введённые пароли не совпадают';
    feedback.style.display = 'block';
    return false;
  }
  feedback.style.display = 'none';
  return true;
}

// reg fetch
formReg?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { login, userName, password, method, action } = event.target;
  if (isSamePass()) {
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        login: login.value,
        userName: userName.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.reg) {
      window.location.assign(data.url);
    } else {
      feedback.style.display = 'block';
      feedback.textContent = data.message;
    }
  }
});

// login form
formLogin?.addEventListener('submit', async (event) => {
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
  const data = await res.json();
  if (data.login) {
    window.location.assign(data.url);
  } else {
    feedback.style.display = 'block';
    feedback.textContent = data.message;
  }
});

// student form
formStudent?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    firstName,
    secondName,
    age,
    exper,
    about,
    phone,
    email,
    action,
    method,
  } = event.target;
  const res = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      firstName: firstName.value,
      secondName: secondName.value,
      age: age.value,
      exper: exper.value,
      about: about.value,
      phone: phone.value,
      email: email.value,
    }),
  });
  const html = await res.text();
  document.querySelector('.list-group').insertAdjacentHTML('beforeend', html);
  formStudent.reset();
});
