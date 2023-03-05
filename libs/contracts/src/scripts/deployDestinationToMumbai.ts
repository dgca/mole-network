import { ethers } from "hardhat";

// nx run contracts:run -- --network mumbai src/scripts/deployDestinationToMumbai.ts

async function main() {
  const MockDestination = await ethers.getContractFactory("MockDestination");
  const mockDestination = await MockDestination.deploy();

  await mockDestination.deployed();

  console.log(`Deployed MockDestination to ${mockDestination.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
