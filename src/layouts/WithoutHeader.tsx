import React from 'react';
import { Outlet } from 'react-router-dom';

function WithoutHeader() {
  return <Outlet />;
}

export default WithoutHeader;
