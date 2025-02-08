// src/components/WalletButton.tsx
import React, { useState } from "react";
import { Button } from '@mui/material';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
// (removed unused import)

const WalletButton: React.FC = () => {
  const [account, setAccount] = useState<string>("");

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal();
      const instance = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(instance);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  // (removed unused handleConnect function)


  return (
    <Button variant="contained" color="secondary" onClick={connectWallet}>
      {account ? `Connected: ${account.substring(0, 6)}...${account.substring(account.length - 4)}` : "Connect Wallet"}
    </Button>
  );
};

export default WalletButton;
