// src/components/DonationForm.tsx
import React, { useState } from "react";
import { parseEther } from "ethers";
import { getFundManagerContract } from "../contract";
import { getProvider } from "../web3";

const DonationForm: React.FC = () => {
  const [amount, setAmount] = useState<string>("");

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const provider = getProvider();
      const contract = getFundManagerContract(provider);
      await contract.donate({ value: parseEther(amount) });
      alert("Donation successful!");
    } catch (error) {
      console.error("Donation failed:", error);
      alert("Donation failed!");
    }
  };

  return (
    <form onSubmit={handleDonate}>
      <input
        type="text"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
