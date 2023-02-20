import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import ProductCard from './ProductCard';
import { getProducts } from './productSlice';
import './Product.scss';

export default function ProductList():JSX.Element {
  const { products } = useSelector(
    (store: RootState) => store.productState,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
    <div className="product__pageName">
      Мерч
    </div>
      <div className="product__flex">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>

  );
}
