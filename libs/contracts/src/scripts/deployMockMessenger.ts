import { ethers } from "hardhat";

// nx run contracts:run -- --network base src/scripts/deployMockMessenger.ts

async function main() {
  const MockMessenger = await ethers.getContractFactory("MockMessenger");
  const mockMessenger = await MockMessenger.deploy(
    "0x8A4FB88FD6f885eDB4f43621940CC3B85439d619"
  );

  await mockMessenger.deployed();

  console.log(`Deployed MockMessenger to ${mockMessenger.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
