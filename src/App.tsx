import { useEffect, useState } from 'react';
import AutoLeasingPage from './pages/AutoLeasingPage';
import ConsumerLoansPage from './pages/ConsumerLoansPage';
import RefinancingPage from './pages/RefinancingPage';
import HomeRenovationPage from './pages/HomeRenovationPage';
import LifeInsurancePage from './pages/LifeInsurancePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      setCurrentPath(window.location.pathname);
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
