import { Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SIgnIn/SignIn";
import NotFound from "../components/NotFound/NotFound";
import HomePage from "../pages/Home/HomePage";
import MainContent from "../components/MainContent/MainContent";
import ServerMainContent from "../components/ServerMainContent/ServerMainContent";
import MessageContent from "../components/MessageContent/MessageContent";
import VoiceMessageContent from "../components/VoiceMessageContent/VoiceMessageContent";



export default function AppRouter() {
  return (
    <Routes>
      <Route path={'/signin'} element={<Auth><SignIn /></Auth>}/>
      <Route path={'/signup'} element={<Auth><SignUp /></Auth>}/>
      <Route path={'/@me'} element={<HomePage><MainContent/></HomePage>}/>
      <Route path={'/signin'} element={<Auth><SignIn /></Auth>}/>
      <Route path={'/messages'} element={<HomePage><ServerMainContent><MessageContent/></ServerMainContent></HomePage>}/>
      <Route path={'/voice'} element={<HomePage><ServerMainContent><VoiceMessageContent/></ServerMainContent></HomePage>}/>
      <Route path={'*'} element={<NotFound />}/>
    </Routes>
  )
}
