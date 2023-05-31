import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { journeyLoader } from './routes/loaders/journeys';
import Root from './routes/root';
import { stationsLoader } from './routes/loaders/stations';
import StationList from './routes/stations/StationList';

const error = <p>Cannot load data.</p>;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: journeyLoader,
    errorElement: error,
     children: [
        {
          path: "/stations",
          loader: stationsLoader,
          element:<StationList />,
          errorElement: error,
        }
     ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
