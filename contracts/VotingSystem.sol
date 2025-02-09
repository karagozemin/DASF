// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract ProposalManager is Ownable {
    // Define the Proposal struct.
    struct Proposal {
        uint256 id;
        string title;
        uint256 fundsRequested;
        string status; // e.g. "Pending", "Approved", "Rejected"
        uint256 votesFor;
        uint256 votesAgainst;
        uint256 allocatedAmount;
    }

    // Declare the proposals array.
    Proposal[] public proposals;

    event ProposalCreated(uint256 id, string title, uint256 fundsRequested);
    event ProposalUpdated(uint256 id, string status);

    // Constructor: initializes Ownable with msg.sender.
    constructor() Ownable(msg.sender) { }

    // Create a new proposal (only owner can call this)
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

    // Update the status of an existing proposal (only owner can call this)
    function updateProposalStatus(uint256 proposalId, string memory status) external onlyOwner {
        require(proposalId < proposals.length, "Invalid proposalId");
        proposals[proposalId].status = status;
        emit ProposalUpdated(proposalId, status);
    }
}

contract VotingSystem is ProposalManager {
    // Since VotingSystem inherits ProposalManager, it has direct access to the proposals array.
    // We add a mapping to keep track of voters per proposal.
    mapping(uint256 => address[]) public voters;

    event VoteCast(address voter, uint256 proposalId, bool support);

    // VotingSystem does not need a separate ProposalManager instance.
    // The ProposalManager constructor is called automatically via inheritance.
    
    // The vote function directly updates the proposal in storage.
    function vote(uint256 proposalId, bool support) external {
        require(proposalId < proposals.length, "Invalid proposalId");
        Proposal storage proposal = proposals[proposalId];
        if (support) {
            proposal.votesFor += 1;
        } else {
            proposal.votesAgainst += 1;
        }
        voters[proposalId].push(msg.sender);
        emit VoteCast(msg.sender, proposalId, support);
    }

    // Checks if a given address has voted on a specific proposal.
    function hasVoted(address voter, uint256 proposalId) public view returns (bool) {
        require(proposalId < proposals.length, "Invalid proposalId");
        for (uint i = 0; i < voters[proposalId].length; i++) {
            if (voters[proposalId][i] == voter) {
                return true;
            }
        }
        return false;
    }
}
