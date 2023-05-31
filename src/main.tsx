import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { journeyLoader } from './routes/loaders/journeys';
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: journeyLoader,
    errorElement: <p>Cannot load data.</p>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
