import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SIgnIn/SignIn";
import NotFound from "../components/NotFound/NotFound";
import HomePage from "../pages/Home/HomePage";


export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: '/signin',
    element: <Auth><SignIn /></Auth>
  },
  {
    path: '/signup',
    element: <Auth><SignUp /></Auth>
  },
  {
    path: '/home',
    element: <HomePage/>
  },
]);