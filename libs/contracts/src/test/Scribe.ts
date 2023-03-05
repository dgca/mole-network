import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { Scribe, MockDestination } from "../typechain-types";

describe("Scribe", function () {
  it("Should deploy with the correct owner", async function () {
    const [owner] = await ethers.getSigners();

    const Scribe = await ethers.getContractFactory("Scribe");
    const scribe = await Scribe.deploy();

    expect(scribe.address).not.to.equal(ethers.constants.AddressZero);
    expect(await scribe.owner()).to.equal(owner.address);
  });

  it("Can add reporters", async function () {
    const [_, alice] = await ethers.getSigners();

    const Scribe = await ethers.getContractFactory("Scribe");
    const scribe = await Scribe.deploy();

    expect(await scribe.reporters(alice.address)).to.be.false;

    await scribe.addReporter(alice.address);

    expect(await scribe.reporters(alice.address)).to.be.true;
  });

  it("Can can write to a destination", async function () {
    const Scribe = await ethers.getContractFactory("Scribe");
    const scribe = (await Scribe.deploy()) as Scribe;

    const Destination = await ethers.getContractFactory("MockDestination");
    const destination = (await Destination.deploy(
      scribe.address
    )) as MockDestination;

    const payload = ethers.utils.defaultAbiCoder.encode(
      ["uint256", "uint256", "int256", "int256"],
      [50, 100, -200, 300]
    );

    await scribe.submitValue(
      destination.address,
      "handleReceive(bytes)",
      payload
    );

    const result = await destination.getPayload();

    expect(result).to.eql([
      BigNumber.from("50"),
      BigNumber.from("100"),
      BigNumber.from("-200"),
      BigNumber.from("300"),
    ]);

    const apiPayload = ethers.utils.defaultAbiCoder.encode(["uint256"], [1234]);

    await scribe.submitValue(
      destination.address,
      "handleWebApi(bytes)",
      apiPayload
    );

    const apiResult = await destination.getEthPriceInUsd();

    expect(apiResult).to.eql(BigNumber.from("1234"));
  });
});
