// SPDX-License-Identifier: MIT AND AGPL-3.0-or-later
pragma solidity ^0.8.9;
import "../vendor/tellor/UsingTellor.sol";

contract MockChiadoTellorReader is UsingTellor {
  constructor(address payable _tellorAddress) UsingTellor(_tellorAddress) {}

  function getLatestTimestamp() external view returns (uint256) {
    uint256 _value = uint256(bytes32(_getTellorValue()));
    return _value;
  }

  function getQueryId() public pure returns (bytes32) {
    bytes memory _queryData = abi.encode("MockTellorQuery");
    bytes32 _queryId = keccak256(_queryData);
    return _queryId;
  }

  function _getTellorValue() internal view returns (bytes memory) {
    (bytes memory _value, ) = getDataBefore(
      getQueryId(),
      block.timestamp - 1 hours
    );

    return _value;
  }
}
