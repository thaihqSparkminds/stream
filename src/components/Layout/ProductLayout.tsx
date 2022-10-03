import { useAppSelector } from 'app/hooks';
import { ProductLayoutNavSide } from 'components/Common';
import { selectIsLoggedIn } from 'features/auth/authSlice';
import React, { useRef } from 'react';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';

export const ProductLayout: React.FunctionComponent<RouteProps> = (props) => {
  const isLoggedInState = useAppSelector(selectIsLoggedIn);
  const token = useRef(localStorage.getItem('token'));
  const sessionId = useRef(localStorage.getItem('sessionId'));
  return (
    <>
      <div>
        <ProductLayoutNavSide />
      </div>
      <div>
        {isLoggedInState || (token.current && sessionId.current) ? (
          <Outlet />
        ) : (
          <Navigate to="/login" />
        )}
      </div>
    </>
  );
};
