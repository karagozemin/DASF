async function main() {
    const AVSManager = await ethers.getContractFactory("AVSManager");
    const avsManager = await AVSManager.deploy();
    await avsManager.deployed();
    console.log("AVSManager deployed at:", avsManager.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  