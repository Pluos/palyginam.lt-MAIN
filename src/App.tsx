import { useEffect, useState } from 'react';
import AutoLeasingPage from './pages/AutoLeasingPage';
import ConsumerLoansPage from './pages/ConsumerLoansPage';
import RefinancingPage from './pages/RefinancingPage';
import HomeRenovationPage from './pages/HomeRenovationPage';
import LifeInsurancePage from './pages/LifeInsurancePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';

function App() {
  // Get base path from import.meta.env.BASE_URL (set by Vite)
  const basePath = import.meta.env.BASE_URL;
  
  // Helper to normalize path by removing base path
  const normalizePath = (pathname: string) => {
    if (pathname.startsWith(basePath)) {
      return pathname.slice(basePath.length - 1) || '/';
    }
    return pathname;
  };

  const [currentPath, setCurrentPath] = useState(normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);

    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      setCurrentPath(normalizePath(window.location.pathname));
    };

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
      case '/automobiliu-lizingas':
        return <AutoLeasingPage />;
      case '/vartojimo-paskolos':
        return <ConsumerLoansPage />;
      case '/paskolu-refinansavimas':
        return <RefinancingPage />;
      case '/busto-remontas':
        return <HomeRenovationPage />;
      case '/gyvybes-draudimas':
        return <LifeInsurancePage />;
      case '/privatumo-politika':
        return <PrivacyPolicyPage />;
      case '/slapuku-politika':
        return <CookiePolicyPage />;
      default:
        return <AutoLeasingPage />;
    }
  };

  return renderPage();
}

export default App;
