// src/components/AdminPanel.tsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { ethers } from 'ethers';
import { getFundManagerContract } from '../contract';
import { getProvider } from '../web3';

const AdminPanel: React.FC = () => {
  const [recipient, setRecipient] = useState<string>('');
  const [allocation, setAllocation] = useState<string>('');

  const handleAllocate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const provider = getProvider();
      const contract = getFundManagerContract(provider);
      const tx = await contract.allocateFunds(recipient, ethers.parseEther(allocation));
      await tx.wait();
      alert("Funds allocated successfully!");
    } catch (error) {
      console.error("Allocation failed:", error);
      alert("Allocation failed!");
    }
  };

  return (
    <Box component="form" onSubmit={handleAllocate} sx={{ mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Admin Panel</Typography>
      <TextField
        label="Recipient Address"
        variant="outlined"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Allocation Amount (ETH)"
        variant="outlined"
        value={allocation}
        onChange={(e) => setAllocation(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="secondary" type="submit">
        Allocate Funds
      </Button>
    </Box>
  );
};

export default AdminPanel;
