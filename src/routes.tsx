import type { RouteRecord } from 'vite-react-ssg';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { TrialWatch } from './pages/TrialWatch';
import { InvestigativeHub } from './pages/InvestigativeHub';
import { ProBono } from './pages/ProBono';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { Donate } from './pages/Donate';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'trial-watch', element: <TrialWatch /> },
      { path: 'newsroom', element: <InvestigativeHub /> },
      { path: 'pro-bono', element: <ProBono /> },
      { path: 'team', element: <Team /> },
      { path: 'contact', element: <Contact /> },
      { path: 'donate', element: <Donate /> },
    ],
  },
];
