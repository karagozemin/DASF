// src/lib/policy.ts
import { Policy } from '@lit-protocol/aw-tool';

export interface VotingPolicy extends Policy {
  // Define voting-specific restrictions
  maxVotesPerUser?: number;
  minStakeRequirement?: string; // Amount in wei
  votingPeriod?: {
    startBlock: number;
    endBlock: number;
  };
}

export interface FundAllocationPolicy extends Policy {
  // Define fund allocation restrictions
  maxTransferAmount?: string; // Amount in wei
  allowedRecipients?: string[];
  transferFrequencyLimit?: number; // Per day
}