import { Product, ProductId } from '../../features/products/types/types';

export const loadProducts = async (): Promise<Product[]> => {
  const res = await fetch('http://localhost:4000/products');
  return res.json();
};

export const newProduct = async ({
  title,
  body,
  photo,
  price,
  userId,
}: Product): Promise<Product> => {
  const res = await fetch('http://localhost:4000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      body,
      photo,
      price,
      userId,
    }),
  });
  return res.json();
};

export const currentProduct = async ({
  id,
  title,
  body,
  photo,
  price,
  userId,
}: Product): Promise<Product> => {
  const res = await fetch(`http://localhost:4000/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      title,
      body,
      photo,
      price,
      userId,
    }),
  });
  return res.json();
};

export const removeProduct = async (id: ProductId): Promise<Product> => {
  const res = await fetch(`http://localhost:4000/products/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
