import React from 'react';
import ActorForm from './ActorForm';
import ProductForm from './ProductForm';
import SpectacleForm from './SpectacleForm';

function AccountTest(): JSX.Element {
  //     const dispatch = useAppDispatch();
  //   const { error, user } = useSelector((store: RootState) => store.userState);
  //     const registr = (e: React.FormEvent<HTMLFormElement>): void => {
  //         e.preventDefault();
  //         dispatch(
  //           registrUser({
  //             userName: name,
  //             email,
  //             password,
  //             password2,
  //             isAdmin: false,
  //           }),
  //         );
  //       };
  return (
    <div>
      <ActorForm />
      <ProductForm />
      <SpectacleForm />
    </div>
  );
}

export default AccountTest;
