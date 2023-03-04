// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MockDestination {
  address public scribe;
  uint256 public value;

  constructor(address _scribe) {
    scribe = _scribe;
  }

  function handleReceive(bytes calldata _data) external {
    if (msg.sender != scribe) {
      revert("MockDestination: Only scribe can call this function");
    }

    value = abi.decode(_data, (uint256));
  }
}
