import { LandingLayoutFooter, LandingLayoutHeader } from 'components/Common';
import React from 'react';
import { Outlet, RouteProps } from 'react-router-dom';

export const LandingLayout: React.FunctionComponent<RouteProps> = (props) => {
  return (
    <div>
      <div>
        <LandingLayoutHeader />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <LandingLayoutFooter />
      </div>
    </div>
  );
};
