import Intro from '../components/features/intro/Intro';

export interface RouteData {
  path: string;
  element: React.ReactElement;
}

export const ROUTES: RouteData[] = [
  {
    path: '/',
    element: <Intro />
  },
  {
    path: '/game',
    element: <div>game</div>
  },
  {
    path: '/score',
    element: <div>score</div>
  }
];
