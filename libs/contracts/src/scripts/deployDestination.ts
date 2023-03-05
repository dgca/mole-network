import { ethers } from "hardhat";

// nx run contracts:run -- --network base src/scripts/deployDestination.ts

async function main() {
  const MockDestination = await ethers.getContractFactory("MockDestination");
  const mockDestination = await MockDestination.deploy(
    "0x8A4FB88FD6f885eDB4f43621940CC3B85439d619"
  );

  await mockDestination.deployed();

  console.log(`Deployed MockDestination to ${mockDestination.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
