import { useAppSelector } from 'app/hooks';
import { ProductLayoutNavSide } from 'components/Common';
import { selectIsLoggedIn } from 'features/auth/authSlice';
import React from 'react';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';

export const ProductLayout: React.FunctionComponent<RouteProps> = (props) => {
  const isLoggedInState = useAppSelector(selectIsLoggedIn);
  return (
    <>
      <div>
        <ProductLayoutNavSide />
      </div>
      <div>{isLoggedInState ? <Outlet /> : <Navigate to="/login" />}</div>
    </>
  );
};
