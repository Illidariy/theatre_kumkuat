import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../store';
import { getProducts, removeProduct } from '../../../products/productSlice';
import { Product } from '../../../products/types/types';
import UpdateProductForm from '../../update/UpdateProductForm';

function AdminProductCard({ product }: { product: Product }): JSX.Element {
  const [updateFormProduct, setUpdateFormProduct] = useState(false);
  const [refreshDelete, setRefreshDelete] = useState(false);

  function showUpdate(): void {
    setUpdateFormProduct((prev) => !prev);
  }
  function afterDelete(): void {
    setRefreshDelete((prev) => !prev);
  }

  const deleteProduct = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const res = dispatch(removeProduct(product.id));
    res.then((data) =>
      data.meta.requestStatus === 'fulfilled' ? afterDelete() : data,
    );
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [updateFormProduct, refreshDelete]);

  return (
    <div className="product_card" key={product.id}>
      <img src={product.photo} alt="" />
      <div className="product_card_info">
        <h2>{product.title}</h2>
        <p>{product.body}</p>
        <i>{product.price}</i>
        <div className="buttons_admin">
          <button onClick={showUpdate} type="button">
            Update
          </button>
          <button
            className="button_delete"
            onClick={deleteProduct}
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
      {updateFormProduct && (
        <UpdateProductForm
          key={product.id}
          product={product}
          showUpdate={() => showUpdate()}
        />
      )}
    </div>
  );
}

export default AdminProductCard;
