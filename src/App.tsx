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
      // Remove the full basePath including trailing slash
      const result = pathname.slice(basePath.length);
      // Ensure result starts with / or is empty (which becomes /)
      return result.startsWith('/') ? result : '/' + result;
    }
    // Remove trailing slash from basePath for comparison
    const baseWithoutSlash = basePath.replace(/\/$/, '');
    if (pathname.startsWith(baseWithoutSlash)) {
      // Handle case where basePath doesn't have trailing slash in pathname
      const result = pathname.slice(baseWithoutSlash.length);
      return result.startsWith('/') ? result : '/' + result;
    }
    // If no match, return as-is (shouldn't happen but handle gracefully)
    return pathname.startsWith('/') ? pathname : '/' + pathname;
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
