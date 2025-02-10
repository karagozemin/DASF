# Decentralized Autonomous Social Fund (DASF)

[![Built on Base](https://img.shields.io/badge/Built_on-Base-0052FF?logo=coinbase)](https://base.org)
[![EigenLayer Integration](https://img.shields.io/badge/Powered_by-EigenLayer-4B69FF)](https://www.eigenlayer.xyz/)
[![Lit Protocol](https://img.shields.io/badge/Secured_by-Lit_Protocol-00FF00)](https://litprotocol.com/)

A decentralized platform leveraging AI agents and blockchain technology to transform social impact fund management through transparency, community governance, and automated efficiency.

## 👥 Core Team

**Eyüp Efe** - Lit Protocol Integration & Governance  
[![GitHub](https://img.shields.io/badge/GitHub-EyupEfe-181717?logo=github)](https://github.com/SweetieBirdX)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Eyup_Efe-0A66C2?logo=linkedin)](https://www.linkedin.com/in/eyupefekarakoca/)

**Tolga Buhur** - AI Agent Architecture & Fraud Detection  
[![GitHub](https://img.shields.io/badge/GitHub-TolgaBuhur-181717?logo=github)](https://github.com/tbuhur)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Tolga_Buhur-0A66C2?logo=linkedin)](https://www.linkedin.com/in/tolga-buhur-a6304b325/)

**Toygun Tez** - Smart Contracts & Frontend Development  
[![GitHub](https://img.shields.io/badge/GitHub-ToygunTez-181717?logo=github)](https://github.com/Zireaelst)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Toygun_Tez-0A66C2?logo=linkedin)](https://www.linkedin.com/in/toygun-tez-816ba1245/)

## 🌟 Key Features

### 🕵️ Transparent Fund Tracking
- Real-time on-chain verification via EigenLayer AVS
- Immutable transaction history on Base blockchain
- Donor-visible fund flow analytics
- Milestone-based fund release system

### 🧠 AI-Powered Management
- Natural Language Processing (NLP) for proposal analysis
- Computer vision for document verification
- Predictive analytics for impact forecasting
- Automated fraud detection system (40% faster than manual review)

### 🗳️ Community Governance
- Lit Protocol MPC wallet voting system
- Quadratic voting implementation
- Proposal lifecycle management (Draft → Review → Voting → Execution)
- Anti-sybil attack protection with Proof-of-Humanity

### ⚡ Efficient Distribution
- Automated multi-sig approval workflows
- Gas-optimized transaction bundling
- Cross-chain compatibility (Base → Ethereum → Polygon)
- Realtime fund allocation dashboard

## 📜 Smart Contract Ecosystem

| Contract | Address | Technology | Purpose | Status |
|----------|---------|------------|---------|--------|
| [FundManager](https://sepolia.basescan.org/address/0xcf6cd84d94ad448af45a3b30e6af7a710942712e) | `0xcf6c...712e` | EigenLayer AVS | Donation management & verification | Active |
| [ProposalManager](https://sepolia.basescan.org/address/0xc10ef80993f20836c2d24fba197f5da6dbbc2b8f) | `0xc10e...b8f` | IPFS + AI | Proposal lifecycle management | Active |
| [VotingSystem](https://sepolia.basescan.org/address/0xd1efdbfe555ab6f87b3d79ee11d421325e3555a3) | `0xd1ef...55a3` | Lit Protocol MPC | Decentralized voting | Active |
| [AVSManager](https://sepolia.basescan.org/address/0x26969184613048ed3abef958e7ccb7e9ca9f58ed) | `0x2696...58ed` | EigenLayer | AVS coordination | Active |

**EigenLayer AVS:** `0x870679e138bcdf293b7ff14dd44b70fc97e12fc0`

## � Architecture Deep Dive

```mermaid
graph LR
    A[Donor Dashboard] -->|Funds| B[FundManager]
    B -->|Verification| C[EigenLayer AVS]
    C -->|Proofs| D[Base Blockchain]
    E[Community Member] -->|Proposals| F[ProposalManager]
    F -->|Analysis| G[AI Engine]
    G -->|Approval| H[VotingSystem]
    H -->|Consensus| I[Lit Protocol MPC]
    I -->|Execution| B
    J[Admin] -->|Oversight| K[AVSManager]
