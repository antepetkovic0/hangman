import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './navigation/routes';

function App() {
  return (
    <Routes>
      {ROUTES.map(({ path, element }) => (
        <Route key={path} path={path} element={element}></Route>
      ))}
      <Route path={'*'} element={<Navigate to={'/'} />} />
    </Routes>
  );
}

export default App;
