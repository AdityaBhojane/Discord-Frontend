import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetServersById } from '../../Hooks/apis/server/useGetServerById';
const Invite: React.FC = () => {

    const { serverId } = useParams();
    const { getServerById } = useGetServersById(serverId);
    
    return (
        <div className="w-full flex h-screen text-white bg-heroInvite bg-cover bg-no-repeat">
            <div className="w-full max-w-xl mx-auto my-auto bg-[#36393F] rounded-xl shadow-lg p-8">
                <div className="flex flex-col justify-center items-center mb-4 cursor-pointer overflow-hidden">
                    <img className='h-20 w-20 rounded-full' src={`https://api.dicebear.com/9.x/initials/svg?seed=${getServerById.name}`} alt="server-icon" />
                    <div className='text-2xl mt-4'>
                        <p>{getServerById.name}</p>
                    </div>
                    <button className='bg-blue-600 px-6 py-1 rounded-xl mt-5 hover:bg-blue-700'>Join Now</button>
                </div>
            </div>
        </div>
    );
};

export default Invite;