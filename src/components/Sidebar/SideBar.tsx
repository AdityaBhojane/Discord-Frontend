
// import { useDisclosure } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from '../../zustand/modal store/ModalStore';
import DiscordIcon from '../icons svgs/DiscordIcon'
import PluseIcon from '../icons svgs/PluseIcon'
import { useNavStore } from '../../zustand/Nav Store/NavStore';


export default function SideBar() {
    const navigate = useNavigate();
    const setNavigation = useNavStore((state)=>state.setNavigation)

    const setCreateServerModal = useModalStore((state) => state.setCreateServerModal);
    return (
        <div className="w-16 bg-[#1E1F22] flex flex-col items-center py-4 px-2">
            <div
                className="h-12 w-12 rounded-full bg-[#5865F2] mb-4 flex justify-center items-center cursor-pointer"
                onClick={() => {
                    navigate('/@me');
                    setNavigation()
                }}
            >
                <DiscordIcon width={'30px'} height={'30px'} />
            </div>
            <div
                className="h-12 w-12 rounded-full bg-gray-700 mb-4 cursor-pointer"
                onClick={() => {
                    navigate('/messages');
                    setNavigation()
                }}
            ></div>
            <div onClick={setCreateServerModal} className="h-12 w-12 rounded-full bg-gray-700 mt-auto cursor-pointer"><PluseIcon /></div>
        </div>
    )
}
