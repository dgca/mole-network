// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
// import "hardhat/console.sol";

error OnlyOwner();
error OnlyReporter();
error SubmitValueFailed();

contract Scribe {
  address public owner;
  mapping (address => bool) public reporters;

  modifier onlyOwner() {
    if (msg.sender != owner) revert OnlyOwner();
    _;
  }

  modifier onlyReporter() {
    if (reporters[msg.sender] == false) revert OnlyReporter();
    _;
  }

  constructor() {
    owner = address(msg.sender);
  }

  function addReporter(address _reporter) external onlyOwner {
    reporters[_reporter] = true;
  }

  function removeReporter(address _reporter) external onlyOwner {
    reporters[_reporter] = false;
  }

  function submitValue(
    address _target,
    bytes4 _selector,
    bytes calldata _data
  ) external {
    (bool success, ) = address(_target).call(abi.encodePacked(_selector, _data));
    if (!success) revert SubmitValueFailed();
  }
}
