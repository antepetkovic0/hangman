import { Navigate, Route, Routes } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { ROUTES } from '@navigation/routes';
import Layout from '@components/shared/layouts/MainLayout/MainLayout';
import ProtectedRoute from '@components/shared/utilities/ProtectedRoute/ProtectedRoute';

const App = () => (
  <div className="bg-slate-900 text-slate-100">
    <Routes>
      <Route path="/" element={<Layout />}>
        {ROUTES.map(({ path, element, isProtected }) => (
          <Route
            key={path}
            path={path}
            element={
              isProtected ? <ProtectedRoute>{element}</ProtectedRoute> : element
            }
          ></Route>
        ))}
      </Route>
      <Route path={'*'} element={<Navigate to={'/'} />} />
    </Routes>
    <SpeedInsights />
  </div>
);

export default App;
