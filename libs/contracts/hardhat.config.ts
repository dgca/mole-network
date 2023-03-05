import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const networks = (() => {
  if (!process.env.ALCHEMY_MUMBAI_URL || !process.env.SCRIBE_DEPLOYER_PK) {
    return {};
  }

  return {
    mumbai: {
      url: process.env.ALCHEMY_MUMBAI_URL,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      accounts: [process.env.SCRIBE_DEPLOYER_PK!],
    },
    base: {
      url: "https://goerli.base.org",
      accounts: [],
    },
  };
})();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  paths: {
    root: "./src",
  },
  networks,
};

export default config;
