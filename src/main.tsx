//import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import './index.css'
import '@fontsource/roboto/300.css'; // Light
import '@fontsource/roboto/400.css'; // Regular
import '@fontsource/roboto/500.css'; // Medium
import '@fontsource/roboto/700.css'; // Bold
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { slug_url } from './constants/global.ts';
import { Provider } from 'react-redux';
import store from './store/index.ts';

import Error from './components/Error/index.tsx';
import Layout from './Layout/index.tsx';
import Home from './pages/Home/index.tsx';
import Contact from './pages/Contact/index.tsx';

const router = createBrowserRouter([
  {
    path: `${slug_url}`,
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        //path: "/", pas besoin s'il y a le index
        //index: true,
        path: `${slug_url}`,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: `${slug_url}/contact`,
        element: <Contact/>,
        errorElement: <Error />,
      }, 
    ],
  },
]);


// Je créer un root pour mon Layoutlication (a partir d'un élément HTML)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// On injecte notre Layoutlication dans le DOM
//<RouterProvider router={router} /> remplace <Layout />
root.render(
    <Provider store={store}>
      <RouterProvider router={router} /> 
    </Provider>,
);
