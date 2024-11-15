import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../pages/signInPage/SignInPage";
import SignUp from "../pages/signUpPage/SignUpPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/signin',
    element:<SignIn/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
]);