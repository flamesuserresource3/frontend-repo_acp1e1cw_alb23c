import React from 'react';
import Header from './components/Header.jsx';
import DonationSection from './components/DonationSection.jsx';
import InfoPanel from './components/InfoPanel.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-rose-50 text-amber-900">
      <Header />

      <main className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          <div className="md:col-span-2">
            <DonationSection />
          </div>
          <div>
            <InfoPanel />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
