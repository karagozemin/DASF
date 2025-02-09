// src/lib/voting-tool.ts
import { LitAction } from '@lit-protocol/sdk';
import { VotingPolicy } from './policy';

export class VotingTool {
  private readonly policy: VotingPolicy;

  constructor(policy: VotingPolicy) {
    this.policy = policy;
  }

  async castVote(
    voterAddress: string,
    proposalId: string,
    voteWeight: number
  ): Promise<LitAction> {
    const action = new LitAction({
      contractAddress: process.env.VOTING_CONTRACT_ADDRESS!,
      functionName: 'castVote',
      params: [voterAddress, proposalId, voteWeight],
      chain: 'ethereum',
    });

    return action;
  }

  async verifyVotingEligibility(
    voterAddress: string
  ): Promise<LitAction> {
    const action = new LitAction({
      contractAddress: process.env.VOTING_CONTRACT_ADDRESS!,
      functionName: 'checkEligibility',
      params: [voterAddress],
      chain: 'ethereum',
    });

    return action;
  }
}