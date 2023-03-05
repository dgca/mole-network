import { ethers } from "hardhat";

// nx run contracts:run -- --network mumbai src/scripts/deployMockTellorProxy.ts

async function main() {
  const MockTellorProxy = await ethers.getContractFactory("MockTellorProxy");
  const mockTellorProxy = await MockTellorProxy.deploy(
    "0x7388FbF798cec0137e14D82391fdA923f9eEB611"
  );

  await mockTellorProxy.deployed();

  console.log(`Deployed MockTellorProxy to ${mockTellorProxy.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
