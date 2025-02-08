// src/App.tsx
import React from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import DonationForm from './components/DonationForm';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <DonationForm />
        <AdminPanel />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
