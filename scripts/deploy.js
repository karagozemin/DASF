// deploy.js
const hre = require("hardhat");

async function main() {
  // Get the deployer's account
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Get the contract to deploy
  const FundManager = await hre.ethers.getContractFactory("FundManager");
  console.log("Deploying FundManager...");

  // Deploy the contract (add constructor args if needed)
  const fundManager = await FundManager.deploy("0xEigenLayerMockAddress"); // Replace with actual EigenLayer address

  // Wait for deployment to finish
  await fundManager.deployed();

  console.log("FundManager deployed to:", fundManager.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});