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
  const basePath = import.meta.env.BASE_URL || '/';
  
  // Helper to normalize path by removing base path
  const normalizePath = (pathname: string) => {
    // Normalize basePath - ensure it ends with /
    const normalizedBase = basePath.endsWith('/') ? basePath : basePath + '/';
    
    // If pathname starts with the base path, remove it
    if (pathname.startsWith(normalizedBase)) {
      const result = pathname.slice(normalizedBase.length);
      // If result is empty or just '/', return '/'
      return result || '/';
    }
    
    // If pathname is exactly the base path without trailing slash
    const baseWithoutSlash = normalizedBase.slice(0, -1);
    if (pathname === baseWithoutSlash || pathname === normalizedBase) {
      return '/';
    }
    
    // If pathname already starts with /, return as-is
    if (pathname.startsWith('/')) {
      return pathname;
    }
    
    // Otherwise, ensure it starts with /
    return '/' + pathname;
  };

  const [currentPath, setCurrentPath] = useState(() => {
    try {
      return normalizePath(window.location.pathname);
    } catch (error) {
      console.error('Error normalizing path:', error);
      return '/';
    }
  });

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
