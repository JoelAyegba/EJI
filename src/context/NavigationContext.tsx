import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageType = 
  | 'home'
  | 'about'
  | 'impact'
  | 'focus-areas'
  | 'trial-watch'
  | 'newsroom'
  | 'documentaries'
  | 'pro-bono'
  | 'team'
  | 'contact';

interface NavigationContextType {
  page: PageType;
  params: any;
  navigateTo: (newPage: PageType, newParams?: any) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [page, setPageState] = useState<PageType>('home');
  const [params, setParamsState] = useState<any>({});

  const navigateTo = (newPage: PageType, newParams: any = {}) => {
    setPageState(newPage);
    setParamsState(newParams);
  };

  // Jump to the top on page changes. We use an instant scroll because the global
  // `scroll-behavior: smooth` (in index.css) would otherwise animate this, and the
  // animation gets interrupted when the new page swaps in — leaving the view partway down.
  // If a page was opened with a `focus` target (e.g. a specific team profile), that page
  // handles its own scroll, so we skip the reset.
  useEffect(() => {
    if (params?.focus) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [page, params]);

  return (
    <NavigationContext.Provider value={{ page, params, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
