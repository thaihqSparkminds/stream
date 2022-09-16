import { ProductLayoutNavSide } from 'components/Common';
import React from 'react';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';

export const ProductLayout: React.FunctionComponent<RouteProps> = (props) => {
  const isLoggedIn = true;
  return (
    <>
      <div>
        <ProductLayoutNavSide />
      </div>
      <div>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</div>
    </>
  );
};
