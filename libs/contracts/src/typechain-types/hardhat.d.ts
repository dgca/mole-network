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
      name: "MockChiadoTellorReader",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockChiadoTellorReader__factory>;
    getContractFactory(
      name: "MockDestination",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockDestination__factory>;
    getContractFactory(
      name: "MockMessenger",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockMessenger__factory>;
    getContractFactory(
      name: "MockTellorProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockTellorProxy__factory>;
    getContractFactory(
      name: "Scribe",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Scribe__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC2362",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2362__factory>;
    getContractFactory(
      name: "IMappingContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMappingContract__factory>;
    getContractFactory(
      name: "Autopay",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Autopay__factory>;
    getContractFactory(
      name: "ITellor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITellor__factory>;
    getContractFactory(
      name: "BenchUsingTellor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BenchUsingTellor__factory>;
    getContractFactory(
      name: "MappingContractExample",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MappingContractExample__factory>;
    getContractFactory(
      name: "TellorPlayground",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TellorPlayground__factory>;
    getContractFactory(
      name: "UsingTellor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UsingTellor__factory>;

    getContractAt(
      name: "MockChiadoTellorReader",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockChiadoTellorReader>;
    getContractAt(
      name: "MockDestination",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockDestination>;
    getContractAt(
      name: "MockMessenger",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockMessenger>;
    getContractAt(
      name: "MockTellorProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockTellorProxy>;
    getContractAt(
      name: "Scribe",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Scribe>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC2362",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2362>;
    getContractAt(
      name: "IMappingContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMappingContract>;
    getContractAt(
      name: "Autopay",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Autopay>;
    getContractAt(
      name: "ITellor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITellor>;
    getContractAt(
      name: "BenchUsingTellor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BenchUsingTellor>;
    getContractAt(
      name: "MappingContractExample",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MappingContractExample>;
    getContractAt(
      name: "TellorPlayground",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TellorPlayground>;
    getContractAt(
      name: "UsingTellor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UsingTellor>;

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
