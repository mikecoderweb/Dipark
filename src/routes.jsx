import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import WebDesign from './pages/WebDesign';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/web-design',
    element: <WebDesign />,
  },
]);
