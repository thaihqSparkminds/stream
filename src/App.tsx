import { LandingLayout, ProductLayout } from 'components/Layout';
import ForgotPasswordPage from 'features/auth/pages/ForgotPasswordPage';
import LoginPage from 'features/auth/pages/LoginPage';
import RegisterPage from 'features/auth/pages/RegisterPage';
import HomePage from 'features/home/pages/HomePage';
import InmailPage from 'features/inmail/pages/InmailPage';
import LandingPage from 'features/landing/pages/LandingPage';
import SettingPage from 'features/setting/pages/SettingPage';
import NotFoundPage from 'features/static/pages/NotFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<LandingLayout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="register" element={<RegisterPage />} />
        <Route path="reset-password" element={<ForgotPasswordPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="/my/*" element={<ProductLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="inmail" element={<InmailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
