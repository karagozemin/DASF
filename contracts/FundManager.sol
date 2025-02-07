// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

// Define an interface for the EigenLayer AVS contract.
// (Update the function name and parameters based on the EigenLayer AVS Developer Guide.)
interface IAVS {
    function checkAllocation(address recipient, uint256 amount) external view returns (bool);
}

contract FundManager is Ownable, ReentrancyGuard {
    uint256 public totalFunds;
    mapping(address => uint256) public donations;

    // Instance of the EigenLayer AVS contract.
    IAVS public avs;

    event DonationReceived(address indexed donor, uint256 amount);
    event FundsAllocated(address indexed recipient, uint256 amount);

    // If your Ownable requires an argument (in older OpenZeppelin versions), use:
    // constructor(address _avsAddress) Ownable(msg.sender) { ... }
    // For latest versions (v4.x), Ownable is parameterless:
    constructor(address _avsAddress) Ownable(msg.sender) {
        avs = IAVS(_avsAddress);
    }

    // Accept ETH donations.
    function donate() external payable nonReentrant {
        donations[msg.sender] += msg.value;
        totalFunds += msg.value;
        emit DonationReceived(msg.sender, msg.value);
    }

    // Allocate funds to a recipient (only owner).
    // Before transferring, the allocation is verified via EigenLayer AVS.
    function allocateFunds(address recipient, uint256 amount) external onlyOwner nonReentrant {
        require(amount <= totalFunds, "Insufficient funds");
        require(avs.checkAllocation(recipient, amount), "AVS verification failed");
        totalFunds -= amount;
        (bool sent, ) = recipient.call{value: amount}("");
        require(sent, "Transfer failed");
        emit FundsAllocated(recipient, amount);
    }

    // Optional: Expose a function for external verification of allocations.
    function verifyAllocation(address recipient, uint256 amount) external view returns (bool) {
        return avs.checkAllocation(recipient, amount);
    }
}
