import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
// import './Auth.scss';
import { loginUser } from './authSlice';

function Authorization(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { user } = useSelector((store: RootState) => store.userState);

  useEffect(() => {
    if ('name' in user) {
      nav('/');
    }
  }, [user, nav]);
  const login = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      loginUser({
        email,
        password,
        isAdmin: true,
      }),
    );
  };

  return (
    <div className="form__container">
      <form
        className="form__body"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={login}
      >
        <label htmlFor="type">Email</label>
        <input
          id="type"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="img">Password</label>
        <input
          id="img"
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
