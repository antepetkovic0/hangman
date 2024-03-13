import Intro from '../components/features/intro/Intro';

export interface RouteData {
  path: string;
  element: React.ReactElement;
  isProtected: boolean;
}

export const ROUTES: RouteData[] = [
  {
    path: '/',
    element: <Intro />,
    isProtected: false
  },
  {
    path: '/game',
    element: <div>game</div>,
    isProtected: true
  },
  {
    path: '/score',
    element: <div>score</div>,
    isProtected: true
  }
];
