import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Loading from './pages/NotFound/Loading';
const Provider = lazy(() => (import('./store/Provider')))
const App = lazy(() => (import('./App')));
const ListTodo = lazy(() => (import('./components/ListTodo')));
const AddTodo = lazy(() => (import('./components/AddTodo')));
const EditTodo = lazy(() => (import('./components/EditTodo')));
const EditFolder = lazy(() => (import('./components/EditFolder')));
const Folder = lazy(() => (import('./components/Folder')));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/todos'>
      {/* <BrowserRouter> */}
      <Provider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path='' element={<Folder />} />
              <Route path='folder' element={<ListTodo />} />
            </Route>
            <Route path='/edit-todo/:folderId/:todoId' element={<EditTodo />} />
            <Route path='/add-todo/:folderId' element={<AddTodo />} />
            <Route path='/edit-folder/:folderId' element={<EditFolder />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
