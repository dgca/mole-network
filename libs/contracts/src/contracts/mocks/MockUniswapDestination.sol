// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

struct Payload {
  uint256 calledCount;
  uint256 blockNumber;
  int256 amount0;
  int256 amount1;
}

contract MockUniswapDestination {
  address public scribe;
  Payload public value;

  constructor(address _scribe) {
    scribe = _scribe;
  }

  function handleReceive(bytes calldata _data) external {
    if (msg.sender != scribe) {
      revert("MockDestination: Only scribe can call this function");
    }

    (
      uint256 _calledCount,
      uint256 _blockNumber,
      int256 _amount0,
      int256 _amount1
    ) = abi.decode(_data, (uint256, uint256, int256, int256));

    Payload memory payload = Payload({
      calledCount: _calledCount,
      blockNumber: _blockNumber,
      amount0: _amount0,
      amount1: _amount1
    });

    value = payload;
  }
}
