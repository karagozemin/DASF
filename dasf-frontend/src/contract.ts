// src/contract.ts
import { ethers } from 'ethers';
import { Web3Provider, Provider } from '@ethersproject/providers';
import FundManagerABI from './FundManagerABI.json'; // Place your ABI JSON file here

// Replace with your deployed contract address
const CONTRACT_ADDRESS = "0xYourFundManagerContractAddress";
export const getFundManagerContract = (provider: Provider) => {
    const signer = (provider as Web3Provider).getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, FundManagerABI, signer as unknown as ethers.Signer);
  };
