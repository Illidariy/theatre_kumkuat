import React, { useState } from 'react';
import { useAppDispatch } from '../../../store';
import { currentProduct } from '../../products/productSlice';
import { Product } from '../../products/types/types';

function UpdateProductForm({
  product,
  showUpdate,
}: {
  product: Product;
  showUpdate: () => void;
}): JSX.Element {
  const [title, setTitle] = useState(product.title);
  const [body, setBody] = useState(product.body);
  const [photo, setPhoto] = useState(product.photo);
  const [price, setPrice] = useState(product.price);
  const [userId, setUserId] = useState(product.userId);

  const dispatch = useAppDispatch();

  const updateProduct = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const res = dispatch(
      currentProduct({
        id: product.id,
        title,
        body,
        photo,
        price,
        userId,
      }),
    );
    res.then((data) => {
      if (data.meta.requestStatus === 'fulfilled') {
        showUpdate();
      }
    });
  };
  return (
    <div className="form__container">
      <form
        className="form__body"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={updateProduct}
      >
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={product.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Body</label>
        <input
          id="body"
          name="body"
          type="text"
          defaultValue={product.body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label htmlFor="photo">Photo</label>
        <input
          id="photo"
          name="photo"
          type="text"
          defaultValue={product.photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          defaultValue={product.price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <label htmlFor="userId">UserId</label>
        <input
          id="userId"
          name="userId"
          type="number"
          defaultValue={product.userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        />
        <button type="submit">SAVE</button>
      </form>
      {/* <h2>{error && error}</h2> */}
    </div>
  );
}

export default UpdateProductForm;
