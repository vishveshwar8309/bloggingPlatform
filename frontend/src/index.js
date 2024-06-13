import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import App from './App';
import store from './store';
import UnloggedScreen from './screens/UnloggedScreen';
import BlogScreen from './screens/BlogScreen'
import LoginScreen from './screens/LoginScreen';
import RegisterUserScreen from './screens/RegisterUserScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index={true} path='/' element={<UnloggedScreen />} />
      <Route path='/blogs/:id' element={<BlogScreen />} />
      <Route path='/signin' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterUserScreen />} />
    </Route>

  )
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

