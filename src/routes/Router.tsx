import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Auth from "../pages/Auth/SignUpPage";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SIgnIn/SignIn";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/signin',
    element:<Auth><SignIn/></Auth>
  },
  {
    path:'/signup',
    element:<Auth><SignUp/></Auth>
  },
]);