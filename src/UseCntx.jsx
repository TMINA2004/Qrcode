import React, { createContext, useState } from 'react';

// Create the context
export const MyContext = createContext();

const UseCntx = ({ children }) => {
  // Shared state
  const [varr, setvar] = useState('URL');

  // The value we pass to consumers
  const contextValue = {
  varr,
   setvar
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export default UseCntx;
