import React from 'react';
import CountdownTimer from './CountdownTimer';
 
export const App: React.FC = () => {
  return (
    <div>
      <CountdownTimer initialTime={0} /> 
    </div>
  );
};
 