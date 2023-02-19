import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { newProduct } from '../products/productSlice';

function ProductForm({
  productHandler,
}: {
  productHandler: () => void;
}): JSX.Element {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [photo, setPhoto] = useState('');
  const [price, setPrice] = useState(0);
  const [userId, setUserId] = useState(1);

  const dispatch = useAppDispatch();

  const createProduct = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      newProduct({
        title,
        body,
        photo,
        price,
        userId,
      }),
    );
    productHandler();
  };

  return (
    <div className="form__container">
      <form className="form__body" onSubmit={createProduct}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Body</label>
        <input
          id="body"
          name="body"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label htmlFor="photo">Photo</label>
        <input
          id="photo"
          name="photo"
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <label htmlFor="userId">UserId</label>
        <input
          id="userId"
          name="userId"
          type="number"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        />
        <button type="submit">Добавить</button>
      </form>
      {/* <h2>{error && error}</h2> */}
    </div>
  );
}

export default ProductForm;
