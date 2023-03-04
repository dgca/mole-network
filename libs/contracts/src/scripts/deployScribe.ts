import { ethers } from 'hardhat';

async function main() {
  const Scribe = await ethers.getContractFactory('Scribe');
  const scribe = await Scribe.deploy();

  await scribe.deployed();

  console.log(`Deployed Scribe to ${scribe.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
