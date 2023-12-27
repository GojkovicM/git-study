import "./App.css";
import { WeatherHandler } from "./store/weather";
import {router} from "./utilities/routing"


import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <WeatherHandler>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </WeatherHandler>
  );
}

export default App;
