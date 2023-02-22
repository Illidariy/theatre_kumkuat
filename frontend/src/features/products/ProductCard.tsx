import React from 'react';
import { Product } from './types/types';
import './Product.scss';

export default function ProductCard({
  product,
}: {
  product: Product;
}): JSX.Element {
  return (
    <div className="product__container">
      <img className="product__img" src={product.photo} alt="spectacle" />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <a href="/спроси ссылку у Коли">
        <button className="product__button" type="button">
          купить
        </button>
      </a>
      <div className="product__text" />
      <h4>{product.body}</h4>
      <div />
    </div>
  );
}
