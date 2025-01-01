import React, { ReactNode } from 'react';
import SideBar from '../../components/Sidebar/SideBar';
import { useNavStore } from '../../zustand/Nav Store/NavStore';
import NavPanel from '../../components/Navbar/NavPanel';
import ServerNavPanel from '../../components/ServerNavPanel/ServerNavPanel';

interface HomePageProps {
  children: ReactNode;
}

const HomePage: React.FC<HomePageProps> = ({children}) => {
  const Navigation = useNavStore((state)=>state.Navigation)

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <SideBar/>
      {Navigation?  <NavPanel/>:<ServerNavPanel/>}
     {children}
    </div>
  );
};

export default HomePage;
