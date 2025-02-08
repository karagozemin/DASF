// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ mt: 4, p: 2, backgroundColor: '#f5f5f5', textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} DASF. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
