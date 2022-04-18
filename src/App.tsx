import React from 'react';
import './App.scss';
import OnboardingTracker from './components/OnboardingTracker/OnboardingTracker';

const App: React.FC = () => {
  return (
    <div className="app">
      <OnboardingTracker />
    </div>
  );
}

export default App;
