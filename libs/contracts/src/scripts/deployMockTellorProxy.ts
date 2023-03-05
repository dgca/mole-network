import { ethers } from "hardhat";

// nx run contracts:run -- --network mumbai src/scripts/deployMockTellorProxy.ts

const playground = {
  mumbai: "0x3251838bd813fdf6a97D32781e011cce8D225d59",
  chiado: "0xe7147C5Ed14F545B4B17251992D1DB2bdfa26B6d",
};

async function main() {
  const MockTellorProxy = await ethers.getContractFactory("MockTellorProxy");
  const mockTellorProxy = await MockTellorProxy.deploy(
    "0x7388FbF798cec0137e14D82391fdA923f9eEB611",
    "0xe7147C5Ed14F545B4B17251992D1DB2bdfa26B6d"
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
