import React, { useState } from 'react';
import ActorForm from './ActorForm';
import ProductForm from './ProductForm';
import SpectacleForm from './SpectacleForm';
import './styles/styles.css';
import ActorTable from './tables/ActorTable';
import ProductTable from './tables/ProductTable';
import SpectacleTable from './tables/SpectacleTable';

function AccountTest(): JSX.Element {
  const [actorForm, setActorForm] = useState(false);
  const [productForm, setProductForm] = useState(false);
  const [spectacleForm, setSpectacleForm] = useState(false);

  function actorHandler(): void {
    setActorForm((prev) => !prev);
  }
  function productHandler(): void {
    setProductForm((prev) => !prev);
  }
  function spectacleHandler(): void {
    setSpectacleForm((prev) => !prev);
  }

  return (
    <div>
      <div className="header">
        <button onClick={actorHandler} type="button">
          Actor Form
        </button>
        <button onClick={productHandler} type="button">
          Product Form
        </button>
        <button onClick={spectacleHandler} type="button">
          Spectacle Form
        </button>
        {actorForm && <ActorForm actorHandler={() => actorHandler()} />}
        {productForm && <ProductForm productHandler={() => productHandler()} />}
        {spectacleForm && (
          <SpectacleForm spectacleHandler={() => spectacleHandler()} />
        )}
      </div>
      <div className="tables">
        <div className="actors_table">
          <ActorTable />
        </div>
        <div className="products_table">
          <ProductTable />
        </div>
        <div className="spectacles_table">
          <SpectacleTable />
        </div>
      </div>
    </div>
  );
}

export default AccountTest;
