import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ComboForm from '../components/comboForm';
import Success from '../components/success';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ComboForm />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default AppRoutes;
