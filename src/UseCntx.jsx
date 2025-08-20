import React, { createContext, useState } from 'react';

// Create the context
export const MyContext = createContext();

const UseCntx = ({ children }) => {
  // Shared state
  const [varr, setvar] = useState('URL');
  const [url,seturl]=useState("hello there")
    const [text,settext]=useState("hello there")

  // The value we pass to consumers
  const contextValue = {
  varr,
   setvar,
   url,seturl,text,settext
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export default UseCntx;
