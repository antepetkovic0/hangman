import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@navigation/routes';
import Layout from '@components/shared/Layout/Layout';

function App() {
  return (
    <div className="bg-slate-900 text-slate-100">
      <Routes>
        <Route path="/" element={<Layout />}>
          {ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={element}></Route>
          ))}
        </Route>
        <Route path={'*'} element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
}

export default App;
