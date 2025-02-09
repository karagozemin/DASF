// src/index.ts
import { initialize } from '@lit-protocol/aw-signer';
import { VotingTool } from './lib/voting-tool';
import { FundManager } from './lib/fund-manager';

export async function setupCommunityVoting() {
  // Initialize the Agent Wallet signer
  const signer = await initialize({
    network: 'ethereum',
    pkpId: process.env.PKP_ID!,
  });

  // Create voting tool instance
  const votingTool = new VotingTool({
    maxVotesPerUser: 1,
    minStakeRequirement: '100000000000000000', // 0.1 ETH
    votingPeriod: {
      startBlock: 12345678,
      endBlock: 23456789,
    },
  });

  // Create fund manager instance
  const fundManager = new FundManager({
    maxTransferAmount: '1000000000000000000', // 1 ETH
    allowedRecipients: ['0x...'],
    transferFrequencyLimit: 5,
  });

  return {
    signer,
    votingTool,
    fundManager,
  };
}