import type { RouteRecord } from 'vite-react-ssg';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { InvestigativeHub } from './pages/InvestigativeHub';
import { ProBono } from './pages/ProBono';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { Donate } from './pages/Donate';
import { PublicationDetail } from './pages/PublicationDetail';
import { NotFound } from './pages/NotFound';
import { newsArticles } from './data/mockData';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'newsroom', element: <InvestigativeHub /> },
      { path: 'pro-bono', element: <ProBono /> },
      { path: 'team', element: <Team /> },
      { path: 'contact', element: <Contact /> },
      { path: 'donate', element: <Donate /> },
      {
        path: 'newsroom/:id',
        element: <PublicationDetail />,
        getStaticPaths: () => newsArticles.map(a => `newsroom/${a.id}`),
      },
      // Prerendered to dist/404.html, which Vercel serves (with a 404 status)
      // for any path that has no static file.
      { path: '404', element: <NotFound /> },
      // Client-side fallback, so in-app navigation to an unknown path renders
      // the same page instead of an empty layout.
      { path: '*', element: <NotFound /> },
    ],
  },
];
