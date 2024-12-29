import React from 'react';
import DiscordIcon from '../../components/icons svgs/DiscordIcon';
import PluseIcon from '../../components/icons svgs/PluseIcon';
import Friends from '../../components/icons svgs/Friends';


const HomePage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-16 bg-[#1E1F22] flex flex-col items-center py-4">
        {/* Icons */}
        <div className="h-12 w-12 rounded-full bg-[#5865F2] mb-4 flex justify-center items-center cursor-pointer">
          <DiscordIcon/>
        </div>
        <div className="h-12 w-12 rounded-full bg-gray-700 mb-4 cursor-pointer"></div>
        <div className="h-12 w-12 rounded-full bg-gray-700 mb-4 cursor-pointer"></div>
        <div className="h-12 w-12 rounded-full bg-gray-700 mb-4 cursor-pointer"></div>
        <div className="h-12 w-12 rounded-full bg-gray-700 mt-auto cursor-pointer"><PluseIcon/></div>
      </div>

      {/* Main Section */}
      <div className="flex flex-1">
        {/* Navigation Panel */}
        <div className="w-64 bg-[#2B2D31] border-r border-gray-700">
          <div className="text-center w-full p-2">
            <input type="text" placeholder='Find or start a conversation' className='bg-[#202225] text-[#96989D] w-full text-sm p-2' />
          </div>
          <div className="w-full p-2 flex items-center ">
            {/* <Friends/> */}
            <p className="text-md block">Friends</p>
            <p className="text-md block">Friends</p>
            <p className="text-md block">Friends</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-4 bg-gray-850 border-b border-gray-700">
            <div className="text-lg font-semibold">Add Friend</div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-center bg-gray-850">
            <input
              type="text"
              placeholder="Enter a Username#0000"
              className="w-1/2 p-2 mb-4 bg-gray-800 border border-gray-600 text-white rounded"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Send Friend Request
            </button>

            {/* Illustration */}
            <div className="mt-10 flex flex-col items-center text-center text-gray-400">
              <div className="h-32 w-32 bg-gray-700 rounded-full mb-4"></div>
              <p>Wumpus is waiting on friends. You don’t have to, though!</p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-64 bg-gray-850 border-l border-gray-700 p-4">
          <div className="text-gray-400 text-sm">Active Now</div>
          <p className="mt-2 text-gray-500">
            It’s quiet for now... When a friend starts an activity, we’ll show
            it here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
