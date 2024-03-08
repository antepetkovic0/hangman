export interface RouteData {
  path: string;
  element: React.ReactElement;
}

export const ROUTES: RouteData[] = [
  {
    path: '/',
    element: <div>user input</div>
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
