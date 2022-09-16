import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EventMainPage from './pages/EventMainPage';

interface EventPageProps {}

const EventPage: React.FunctionComponent<EventPageProps> = (props) => {
  return (
    <Routes>
      <Route path="" element={<EventMainPage />} />
    </Routes>
  );
};

export default EventPage;
