import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Landing from "../Pages/Landing/Landing";
import MapPage from "../Pages/MapPage/MapPage";
import FavoritesPage from "../Pages/FavoritesPage/FavoritesPage";
import LoginPage from "../Pages/LogInPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";


export const router = createBrowserRouter([
    
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <Landing />
        },
        {
          path: "MapPage",
          element: <MapPage />
        },
        {
          path: "FavoritesPage",
          element: <FavoritesPage />
        }
      ]
    },
    {
      path: "/LogInPage",
      element: <LoginPage />
    },
    {
      path: "/SignUpPage",
      element: <SignUpPage />
    }


  ])