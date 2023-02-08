import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LoadingData from './components/LoadingData';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Suspense fallback={<LoadingData />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
