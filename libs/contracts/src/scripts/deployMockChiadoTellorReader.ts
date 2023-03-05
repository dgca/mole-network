import { ethers } from "hardhat";

// nx run contracts:run -- --network chiado src/scripts/deployMockChiadoTellorReader.ts

async function main() {
  const MockChiadoTellorReader = await ethers.getContractFactory(
    "MockChiadoTellorReader"
  );
  const mockChiadoTellorReader = await MockChiadoTellorReader.deploy(
    "0xe7147C5Ed14F545B4B17251992D1DB2bdfa26B6d"
  );

  await mockChiadoTellorReader.deployed();

  console.log(
    `Deployed MockChiadoTellorReader to ${mockChiadoTellorReader.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
