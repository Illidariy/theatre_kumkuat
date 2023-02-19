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
    <ul key={product.id}>
      <p>{product.title}</p>
      <i>{product.body}</i>
      <button onClick={showUpdate} type="button">
        Update
      </button>
      <button onClick={deleteProduct} type="button">
        Delete
      </button>
      {updateFormProduct && (
        <UpdateProductForm
          key={product.id}
          product={product}
          showUpdate={() => showUpdate()}
        />
      )}
    </ul>
  );
}

export default AdminProductCard;
