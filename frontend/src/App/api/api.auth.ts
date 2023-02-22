import { PayloadAuth, User } from '../../features/auth/Types/type';

export const registr = async (newUser: User): Promise<PayloadAuth> => {
  const res = await fetch('/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      name: newUser.userName,
      email: newUser.email,
      password: newUser.password,
      password2: newUser.password2,
      isAdmin: newUser.isAdmin,
    }),
  });
  return res.json();
};
export const login = async (user: User): Promise<User> => {
  const res = await fetch('/auth/login', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(user),
  });
  const data = await res.json();

  return data;
};

// export const checkUser = async (): Promise<User> => {
// const res = await fetch('http://localhost:4000/auth/user', {

export const checkUser = async (): Promise<User> => {
  const res = await fetch('/auth/user', {
    credentials: 'include',
  });
  const data = await res.json();
  return data;
};

export const logout = async (): Promise<User> => {
  const res = await fetch('/auth/logout', {
    credentials: 'include',
  });
  return res.json();
};

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch('/main');
  return res.json();
};
