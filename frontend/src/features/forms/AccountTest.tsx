import React, { useState } from 'react';
import ActorForm from './ActorForm';
import ProductForm from './ProductForm';
import SpectacleForm from './SpectacleForm';
import './styles/styles.scss';
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
    <div className="admin_content">
      <div className="buttons_main">
        {!productForm && !spectacleForm && (
          <button onClick={actorHandler} type="button">
            {!actorForm ? 'ACTOR FORM' : 'Back'}
          </button>
        )}
        {!spectacleForm && !actorForm && (
          <button onClick={productHandler} type="button">
            {!productForm ? 'PRODUCT FORM' : 'Back'}
          </button>
        )}
        {!actorForm && !productForm && (
          <button onClick={spectacleHandler} type="button">
            {!spectacleForm ? 'SPECTACLE FORM' : 'Back'}
          </button>
        )}
      </div>
      <div className="main_forms">
        {actorForm && !productForm && !spectacleForm && (
          <>
            <h6>ACTOR FORM</h6>
            <ActorForm actorHandler={() => actorHandler()} />
          </>
        )}
        {productForm && !actorForm && !spectacleForm && (
          <>
            <h6>PRODUCT FORM</h6>
            <ProductForm productHandler={() => productHandler()} />
          </>
        )}
        {spectacleForm && !actorForm && !productForm && (
          <>
            <h6>SPECTACLE FORM</h6>
            <SpectacleForm spectacleHandler={() => spectacleHandler()} />
          </>
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
