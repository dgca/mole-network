// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

struct Payload {
  uint256 calledCount;
  uint256 blockNumber;
  int256 amount0;
  int256 amount1;
}

contract MockDestination {
  address public scribe;
  Payload public payload;
  uint256 public ethPriceInUsd;

  event PayloadReceived(
    uint256 calledCount,
    uint256 blockNumber,
    int256 amount0,
    int256 amount1
  );

  event WebAPIReceived(uint256 ethPriceInUsd);

  constructor(address _scribe) {
    scribe = _scribe;
  }

  modifier onlyScribe() {
    if (msg.sender != scribe)
      revert("MockDestination: Only scribe can call this function");
    _;
  }

  function handleReceive(bytes calldata _data) external onlyScribe {
    (
      uint256 _calledCount,
      uint256 _blockNumber,
      int256 _amount0,
      int256 _amount1
    ) = abi.decode(_data, (uint256, uint256, int256, int256));

    Payload memory nextPayload = Payload({
      calledCount: _calledCount,
      blockNumber: _blockNumber,
      amount0: _amount0,
      amount1: _amount1
    });

    emit PayloadReceived(
      nextPayload.calledCount,
      nextPayload.blockNumber,
      nextPayload.amount0,
      nextPayload.amount1
    );

    payload = nextPayload;
  }

  function handleWebApi(bytes calldata _data) external onlyScribe {
    uint256 _ethPriceInUsd = abi.decode(_data, (uint256));

    emit WebAPIReceived(_ethPriceInUsd);

    ethPriceInUsd = _ethPriceInUsd;
  }

  function getPayload()
    external
    view
    returns (uint256, uint256, int256, int256)
  {
    return (
      payload.calledCount,
      payload.blockNumber,
      payload.amount0,
      payload.amount1
    );
  }

  function getEthPriceInUsd() external view returns (uint256) {
    return ethPriceInUsd;
  }
}
