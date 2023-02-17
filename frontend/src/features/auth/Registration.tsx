import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, RootState } from '../../store';
import { registrUser } from './authSlice';

function Registration(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { error, user } = useSelector((store: RootState) => store.userState);

  useEffect(() => {
    if ('name' in user) {
      nav('/');
    }
  }, [user]);
  const registr = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      registrUser({
        userName: name,
        email,
        password,
        password2,
        isAdmin: false,
      }),
    );
  };
  return (
    <div className="form__container">
      <form
        className="form__body"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={registr}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password2">Password 2</label>
        <input
          id="password2"
          name="password2"
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
      <h2>{error && error}</h2>
    </div>
  );
}

export default Registration;
