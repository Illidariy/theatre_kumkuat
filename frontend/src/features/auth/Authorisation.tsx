import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
// import './Auth.scss';
import { loginUser } from './authSlice';

function Authorization(): JSX.Element {
  const [redirect, setRedirect] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { user } = useSelector((store: RootState) => store.userState);

  useEffect(() => {
    if (redirect) {
      nav('/');
    }
  }, [redirect, nav, user]);
  const login = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      loginUser({
        email,
        password,
      }),
    );
    setRedirect(true);
  };
  console.log(user);

  return (
    <div className="form__container">
      <form
        className="form__body"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={login}
      >
        <label htmlFor="mail">Email</label>
        <input
          id="mail"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="pass">Password</label>
        <input
          id="pass"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Авторизироваться</button>
      </form>
    </div>
  );
}

export default Authorization;
