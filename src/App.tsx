import { Route, Routes } from 'react-router';
import Home from './pages/Home';

import { lazy, Suspense } from 'react';

const List = lazy(() => import('./pages/List'));

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/list'
        element={
          <Suspense fallback={<h3 className='text-gray-200'>Loading...</h3>}>
            <List />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
