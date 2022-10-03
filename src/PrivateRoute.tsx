import userApi from 'api/userApi';
import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSlice';
import React, { useCallback, useEffect, useRef } from 'react';
import { Navigate, Outlet, RouteProps, useNavigate } from 'react-router-dom';

// export default function PrivateRoute(props: RouteProps) {
//   // Checks if user is logged in
//   // If yes, show route
//   // Otherwise, redirect to login page
//   const token = useRef(localStorage.getItem('token'));

//   return token ? <Outlet /> : <Navigate to="/login" />;
// }

export interface PrivateRouteProps {}

export default function PrivateRoute<T extends PrivateRouteProps = PrivateRouteProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentPrivateRoute = (props: Omit<T, keyof PrivateRouteProps>) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const token = useRef(localStorage.getItem('token'));
    const sessionId = useRef(localStorage.getItem('sessionId'));

    useEffect(() => {
      (async () => {
        if (
          !(
            token.current &&
            sessionId.current &&
            (await userApi.getUserDetail(token.current, sessionId.current))
          )
        ) {
          dispatch(authActions.setClearStateToLogout());
          navigate('/login');
        }
      })();
    }, []);

    return <WrappedComponent {...(props as T)} />;
  };

  ComponentPrivateRoute.displayName = `PrivateRoute(${displayName})`;

  return ComponentPrivateRoute;
}
