// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/access/Ownable.sol";

contract ProposalManager is Ownable {
    constructor() Ownable(msg.sender) {}
    struct Proposal {
        uint256 id;
        string title;
        uint256 fundsRequested;
        string status; // "Pending", "Approved", "Rejected"
        uint256 votesFor;
        uint256 votesAgainst;
        uint256 allocatedAmount;
    }

    Proposal[] public proposals;
    mapping(uint256 => mapping(address => bool)) public votes;

    event ProposalCreated(uint256 id, string title, uint256 fundsRequested);
    event ProposalUpdated(uint256 id, string status);

    // Create a new proposal (only owner/DAO initially)
    function createProposal(string memory title, uint256 fundsRequested) external onlyOwner {
        proposals.push(Proposal({
            id: proposals.length,
            title: title,
            fundsRequested: fundsRequested,
            status: "Pending",
            votesFor: 0,
            votesAgainst: 0,
            allocatedAmount: 0
        }));
        emit ProposalCreated(proposals.length - 1, title, fundsRequested);
    }

    // Update proposal status (e.g., after voting)
    function updateProposalStatus(uint256 proposalId, string memory status) external onlyOwner {
        proposals[proposalId].status = status;
        emit ProposalUpdated(proposalId, status);
    }
}