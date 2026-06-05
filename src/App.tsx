import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { TrialWatch } from './pages/TrialWatch';
import { InvestigativeHub } from './pages/InvestigativeHub';
import { ProBono } from './pages/ProBono';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';

const AppContent: React.FC = () => {
  const { page } = useNavigation();

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'trial-watch':
        return <TrialWatch />;
      case 'newsroom':
        return <InvestigativeHub />;
      case 'pro-bono':
        return <ProBono />;
      case 'team':
        return <Team />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-advocacy-gold selection:text-slate-900">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;
