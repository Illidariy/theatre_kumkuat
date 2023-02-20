import React from 'react';
import './NotFound.scss';

export default function NotFound(): JSX.Element {
  return (
    <div className="notfound">
      <span className="notfound__number">404</span>
      <p>ошибка</p>
      <p>такой страницы не существует</p>
      <a href="/" className="notfound__link">
        вернуться на сайт
      </a>
    </div>
  );
}
