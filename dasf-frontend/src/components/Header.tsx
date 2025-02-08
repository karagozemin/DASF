// src/components/Header.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WalletButton from './WalletButton';

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '20px' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DASF
          </Typography>
          <Button color="inherit">Donate</Button>
          <Button color="inherit">Admin</Button>
          <WalletButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
