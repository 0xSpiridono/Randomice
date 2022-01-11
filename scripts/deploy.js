const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const randomice = await (
    await hre.ethers.getContractFactory("Randomice")
  ).deploy();
  await randomice.deployed();
  console.log("Randomice deployed to:", randomice.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
