import React from 'react';
import DiscordIcon from '../../components/icons svgs/DiscordIcon';
import PluseIcon from '../../components/icons svgs/PluseIcon';
import Friends from '../../components/icons svgs/Friends';
import PulseSmallIcon from '../../components/icons svgs/PulseSmallIcon';
import NoFriends from '../../components/icons svgs/NoFriends';
import MicIcon from '../../components/icons svgs/MicIcon';
import HeadphonesIcon from '../../components/icons svgs/HeadphonesIcon';
import SettingsIcon from '../../components/icons svgs/SettingsIcon';


const HomePage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-16 bg-[#1E1F22] flex flex-col items-center py-4 px-2">
        {/* Icons */}
        <div className="h-12 w-12 rounded-full bg-[#5865F2] mb-4 flex justify-center items-center cursor-pointer">
          <DiscordIcon  width={'30px'} height={'30px'}/>
        </div>
        <div className="h-12 w-12 rounded-full bg-gray-700 mb-4 cursor-pointer"></div>
        <div className="h-12 w-12 rounded-full bg-gray-700 mb-4 cursor-pointer"></div>
        <div className="h-12 w-12 rounded-full bg-gray-700 mb-4 cursor-pointer"></div>
        <div className="h-12 w-12 rounded-full bg-gray-700 mt-auto cursor-pointer"><PluseIcon /></div>
      </div>

      {/* Main Section */}
      <div className="flex flex-1">
        {/* Navigation Panel */}
        <div className="w-64 bg-[#2B2D31] border-r flex flex-col border-gray-700">
          <div className="text-center w-full p-2">
            <input type="text" placeholder='Find or start a conversation' className='bg-[#202225] text-[#96989D] w-full text-sm p-2' />
          </div>
          <div className="mx-2 p-3 flex items-center rounded-md gap-3 cursor-pointer hover:bg-[#42464db9]">
            <Friends />
            <p className="text-md ">Friends</p>
          </div>
          <div className="mx-2 p-3 flex items-center justify-between text-[#949BA4] ">
            <p className="text-md ">Direct Messages</p>
            <PulseSmallIcon />
          </div>

          <div className="w-full p-3 h-fit rounded-lg flex gap-3 bg-[#232428] mt-auto">
            <div className="rounded-full bg-[#09788b]  flex justify-center items-center cursor-pointer p-2">
              <DiscordIcon width='25px' height='25px'/>
            </div>
            <div className="h-10">
              <h3 className="text-sm ">Aditya</h3>
              <p className='text-[12px]'>online</p>
            </div>
            <div className="h-10 flex items-center gap-2 ml-auto">
              <MicIcon/>
              <HeadphonesIcon/>
              <SettingsIcon/>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-4 bg-[#313338] border-b border-gray-700">
            <div className="flex items-center gap-5 text-[#c3c7ce] text-sm">
              <div className="flex items-center gap-3">
                <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" ></path><path fill="currentColor" d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z"></path></svg>
                <p className="text-md ">Friends</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-md ">Online</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-md ">All</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-md ">Pending</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-md ">Block</p>
              </div>
              <div className="flex items-center px-2 py-[2px] rounded-lg gap-3 text-white bg-[#248046]">
                <p className="text-md ">Add Friend</p>
              </div>
            </div>
          </div>
          <hr className='border-[#404247]' />
          {/* Content */}
          <div className="flex h-full">
            <div className="flex-1 flex flex-col items-center justify-center bg-[#313338]">
              <NoFriends />
            </div>
            <div className="w-64 bg-[#313338] border-l border-gray-700 p-4">
              <div className="text-white text-md font-semibold">Active Now</div>
              <p className="mt-2 text-gray-300 text-sm">
                Its quiet for now... When a friend starts an activity, we’ll show
                it here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
