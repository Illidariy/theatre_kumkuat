import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { getProducts } from '../../products/productSlice';
import AdminProductCard from './cards/AdminProductCard';

function ProductTable(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const {
    productState: { products },
  } = useSelector((store: RootState) => store);
  return (
    <div className="list_products">
      {products &&
        products.map((product) => (
          <AdminProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductTable;
