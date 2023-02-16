import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

function Success() {
  return (
    <Stack
      sx={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <CheckCircle sx={{ fontSize: 80, color: 'success.main' }} />
      <Typography variant="h4" sx={{ my: 4 }}>
        Form submitted successfully!
      </Typography>
      <Button variant="contained" color="primary" href="/">
        Back to Home
      </Button>
    </Stack>
  );
}

export default Success