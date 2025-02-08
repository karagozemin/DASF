// src/walletConnection.ts
import Web3Modal from "web3modal";
import { Web3Provider } from "@ethersproject/providers";

const providerOptions = {
  /* See https://github.com/Web3Modal/web3modal for configuration options */
};

const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions,
});

export const connectWallet = async (): Promise<Web3Provider> => {
  const instance = await web3Modal.connect();
  const provider = new Web3Provider(instance);
  return provider;
};

export default web3Modal;
