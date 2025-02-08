// src/web3.ts
import { Web3Provider } from '@ethersproject/providers';

// This function returns an Ethers provider if a wallet is injected
export const getProvider = (): Web3Provider => {
    if ((window as any).ethereum) {
        const provider = new Web3Provider((window as any).ethereum);
        return provider;
    } else {
        throw new Error("No crypto wallet found. Please install MetaMask or another wallet.");
    }
};
