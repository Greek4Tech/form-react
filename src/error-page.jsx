import React from 'react';
import { Typography, Button } from '@material-ui/core';

const ErrorPage = () => {
  return (
    <div>
      <Typography variant="h1">Error 404</Typography>
      <Typography variant="h5">Page not found</Typography>
      <Button variant="contained" color="primary" href="/">Go back to homepage</Button>
    </div>
  );
}

export default ErrorPage;
