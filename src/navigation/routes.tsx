import Game from '@components/features/game/Game';
import Intro from '@components/features/intro/Intro';
import Score from '@components/features/score/Score';

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
    element: <Game />,
    isProtected: true
  },
  {
    path: '/score',
    element: <Score />,
    isProtected: true
  }
];
