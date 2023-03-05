/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "MockUniswapDestination",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockUniswapDestination__factory>;
    getContractFactory(
      name: "Scribe",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Scribe__factory>;

    getContractAt(
      name: "MockUniswapDestination",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockUniswapDestination>;
    getContractAt(
      name: "Scribe",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Scribe>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
