// components/UnauthorizedPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const UnauthorizedPage = () => {
  return (
    <div className="unauthorized-page">
      <h1>403 - Access Denied</h1>
      <p>You don't have permission to access this page.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default UnauthorizedPage;