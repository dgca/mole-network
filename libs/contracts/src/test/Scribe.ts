import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Scribe', function () {
  it('Should deploy with the correct owner', async function () {
    const [owner] = await ethers.getSigners();

    const Scribe = await ethers.getContractFactory('Scribe');
    const scribe = await Scribe.deploy();

    expect(scribe.address).not.to.equal(ethers.constants.AddressZero);
    expect(await scribe.owner()).to.equal(owner.address);
  });

  it('Can add reporters', async function () {
    const [_, alice] = await ethers.getSigners();

    const Scribe = await ethers.getContractFactory('Scribe');
    const scribe = await Scribe.deploy();

    expect(await scribe.reporters(alice.address)).to.be.false;

    await scribe.addReporter(alice.address);

    expect(await scribe.reporters(alice.address)).to.be.true;
  });
});
