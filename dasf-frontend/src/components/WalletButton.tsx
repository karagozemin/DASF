// src/components/WalletButton.tsx
import React, { useState } from "react";
import { connectWallet } from "../walletConnection";

const WalletButton: React.FC = () => {
  const [account, setAccount] = useState<string>("");

  const handleConnect = async () => {
    try {
      const provider = await connectWallet();
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  return (
    <button onClick={handleConnect}>
      {account ? `Connected: ${account.substring(0,6)}...${account.substring(account.length - 4)}` : "Connect Wallet"}
    </button>
  );
};

export default WalletButton;
