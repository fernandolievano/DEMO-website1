'use client';

// context/404Context.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NotFoundContextProps {
  is404: boolean;
  setIs404: (is404: boolean) => void;
}

const NotFoundContext = createContext<NotFoundContextProps | undefined>(undefined);

export const useNotFound = (): NotFoundContextProps => {
  const context = useContext(NotFoundContext);
  if (context == null) {
    throw new Error('useNotFound must be used within a NotFoundProvider');
  }
  return context;
};

interface NotFoundProviderProps {
  children: ReactNode;
}

export const NotFoundProvider: React.FC<NotFoundProviderProps> = ({ children }) => {
  const [is404, setIs404] = useState<boolean>(false);

  return (
    <NotFoundContext.Provider value={{ is404, setIs404 }}>
      {children}
    </NotFoundContext.Provider>
  );
};
