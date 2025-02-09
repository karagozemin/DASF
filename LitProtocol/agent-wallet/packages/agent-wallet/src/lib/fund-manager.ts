// src/lib/fund-manager.ts
import { LitAction } from '@lit-protocol/sdk';
import { FundAllocationPolicy } from './policy';

export class FundManager {
  private readonly policy: FundAllocationPolicy;

  constructor(policy: FundAllocationPolicy) {
    this.policy = policy;
  }

  async allocateFunds(
    recipient: string,
    amount: string,
    purpose: string
  ): Promise<LitAction> {
    const action = new LitAction({
      contractAddress: process.env.FUND_MANAGER_CONTRACT_ADDRESS!,
      functionName: 'allocateFunds',
      params: [recipient, amount, purpose],
      chain: 'ethereum',
    });

    return action;
  }

  async getFundDetails(): Promise<LitAction> {
    const action = new LitAction({
      contractAddress: process.env.FUND_MANAGER_CONTRACT_ADDRESS!,
      functionName: 'getAllocationDetails',
      params: [],
      chain: 'ethereum',
    });

    return action;
  }
}