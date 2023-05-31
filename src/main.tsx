import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { journeyLoader } from './routes/loaders/journeys';
import { stationsLoader } from './routes/loaders/stations';
import StationList from './routes/stations/StationList';
import Root from './routes/Root';
import JourneyList from './routes/journeys/JourneyList';

const error = <p>Cannot load data.</p>;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: error,
     children: [
        {
          path: "/stations",
          loader: stationsLoader,
          element:<StationList />,
          errorElement: error,
        },
        {
          path: "/journeys",
          loader: journeyLoader,
          element:<JourneyList />,
          errorElement: error,
        },
     ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
