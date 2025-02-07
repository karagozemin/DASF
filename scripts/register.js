async function main() {
    const fundManagerAddress = "0xYourDeployedFundManagerAddress"; // Replace with actual address
    const EigenRegistry = await ethers.getContractAt("EigenRegistry", "0xEigenRegistryAddress"); // Get EigenRegistry contract instance
    const tx = await EigenRegistry.registerContract(fundManagerAddress, {
      // pass any required configuration parameters here
    });
    await tx.wait();
    console.log("FundManager registered with EigenLayer");
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  