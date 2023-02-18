import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { getSpectacles } from '../spectacles/spectacleSlice';
import ActorForm from './ActorForm';
import ProductForm from './ProductForm';
import SpectacleForm from './SpectacleForm';
import AdminSpectacleCard from './Types/AdminSpectacleCard';
import './styles/styles.css';

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

  const {
    spectacleState: { spectacles },
    actorState: { actors },
  } = useSelector((store: RootState) => store);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSpectacles());
  }, [dispatch]);

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
        {productForm && <ProductForm />}
        {spectacleForm && (
          <SpectacleForm spectacleHandler={() => spectacleHandler()} />
        )}
      </div>
      <div className="spectacles_table">
        <div>
          {spectacles &&
            spectacles.map((spectacle) => (
              <AdminSpectacleCard key={spectacle.id} spectacle={spectacle} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default AccountTest;
