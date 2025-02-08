// src/App.tsx
import React from "react";
import WalletButton from "./components/WalletButton";
import DonationForm from "./components/DonationForm";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>DASF Frontend</h1>
      <WalletButton />
      <h2>Make a Donation</h2>
      <DonationForm />
      {/* Add additional components (e.g., admin panel, data displays) here */}
    </div>
  );
};

export default App;
