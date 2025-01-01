import { Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SIgnIn/SignIn";
import NotFound from "../components/NotFound/NotFound";
import HomePage from "../pages/Home/HomePage";
import MainContent from "../components/MainContent/MainContent";
import ServerMainContent from "../components/ServerMainContent/ServerMainContent";



export default function AppRouter() {
  return (
    <Routes>
      <Route path={'/signin'} element={<Auth><SignIn /></Auth>}/>
      <Route path={'/signup'} element={<Auth><SignUp /></Auth>}/>
      <Route path={'/@me'} element={<HomePage><MainContent/></HomePage>}/>
      <Route path={'/signin'} element={<Auth><SignIn /></Auth>}/>
      <Route path={'/channels/:channelId'} element={<HomePage><ServerMainContent/></HomePage>}/>
      <Route path={'*'} element={<NotFound />}/>
    </Routes>
  )
}
