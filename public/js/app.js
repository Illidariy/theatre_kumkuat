// forms
const formReg = document.querySelector('#form-reg');
const formLogin = document.querySelector('#form-login');
const formStudent = document.querySelector('#form-student');
const editFormStudent = document.querySelector('#edit-form-student');

// inputs
const regPass = document.querySelector('#input-regPass');
const regPassConf = document.querySelector('#input-regPassConf');

// divs
const feedback = document.querySelector('#feedback');
const studentsList = document.querySelector('.list-group-students');

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
  // console.log(html);
  document
    .querySelector('.list-group-students')
    .insertAdjacentHTML('beforeend', html);
  formStudent.reset();
});

// student delete
studentsList?.addEventListener('click', async (event) => {
  if (event.target.classList.contains('card-link-delete')) {
    event.preventDefault();
    const { id } = event.target.dataset;
    const res = await fetch(`/students/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data > 0) {
      event.target.closest('.card').remove();
    }
  }
});

// student edit toggle 1.0
// studentsList?.addEventListener('click', async (event) => {
//   event.preventDefault();
//   if (event.target.classList.contains('card-link-edit')) {
//     const editDiv = event.target.closest('.card');
//     editDiv.querySelector('.edit').classList.toggle('active');
//   }
// });

// student edit form 1.0
// document.querySelectorAll('.edit-form-student').forEach((editFormStudent) => {
//   // console.log(editFormStudent);
//   editFormStudent.addEventListener('click', async (event) => {
//     event.preventDefault();
//     const parent = event.target.parentNode;
//     if (event.target.classList.contains('edit-save')) {
//       const { firstName, secondName, age, exper, about, phone, email, action } =
//         parent;
//       const res = await fetch(action, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'Application/json',
//         },
//         body: JSON.stringify({
//           firstName: firstName.value,
//           secondName: secondName.value,
//           age: age.value,
//           exper: exper.value,
//           about: about.value,
//           phone: phone.value,
//           email: email.value,
//         }),
//       });
//       const data = await res.json();
//       // console.log(data);
//       if (data.message === 'success') {
//         event.target.closest('.card-body').childNodes[0].innerText =
//           data.student.firstName;
//         event.target.closest('.card-body').childNodes[1].innerText =
//           data.student.secondName;
//         event.target.closest('.card-body').childNodes[2].innerText =
//           data.student.age;
//         event.target.closest('.card-body').childNodes[3].innerText =
//           data.student.exper;
//         event.target.closest('.card-body').childNodes[4].innerText =
//           data.student.about;
//         event.target.closest('.card-body').childNodes[5].innerText =
//           data.student.phone;
//         event.target.closest('.card-body').childNodes[6].innerText =
//           data.student.email;
//         event.target.closest('.edit').classList.toggle('active');
//       } else {
//         document.querySelector('.error').innerHTML = data.message;
//       }
//     }
//   });
// });

// student edit form 2.0
// studentsList?.addEventListener('click', async (event) => {
//   event.preventDefault();
//   if (event.target.classList.contains('card-link-edit')) {
//     const { id } = event.target.dataset;
//     const res = await fetch(`/students/${id}`);
//     const data = await res.json();
//     window.location.assign(`/students/${data.url}`);
//   }
// });

editFormStudent?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { firstName, secondName, age, exper, about, phone, email, action } =
    event.target;
  const res = await fetch(action, {
    method: 'PUT',
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
  const data = await res.json();
  if (data.message === 'success') {
    window.location.assign('/students');
  }
});
