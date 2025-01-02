import { useNavigate } from "react-router-dom";
import { useModalStore } from "../../zustand/modal store/ModalStore";
import CategoriesToggle from "../CategoriesToggle/CategoriesToggle";
import Channels from "../Channels/Channels";
import DiscordIcon from "../icons svgs/DiscordIcon";
import EventIcon from "../icons svgs/EventIcon";
import HeadphonesIcon from "../icons svgs/HeadphonesIcon";
import MicIcon from "../icons svgs/MicIcon";
import SettingsIcon from "../icons svgs/SettingsIcon";


export default function ServerNavPanel() {
    const setEditServerModal = useModalStore((state) => state.setEditServerModal);
    const navigate = useNavigate()


    return (
        <div className="w-60 bg-[#2B2D31] border-r flex flex-col border-gray-700">
            <div className="w-full p-2 hover:bg-[#f1f1f111] cursor-pointer flex items-center">
                <p className="px-3 text-sm text-[#d6d6d6]">Server Name</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    className={`w-4 h-4 mr-2 ml-auto transition-all rotate-90`}
                    onClick={setEditServerModal}
                >
                    <path
                        clipRule="evenodd"
                        d="m5.41667 4.2625 5.66573 5.7375-5.66573 5.7375 1.74426 1.7625 7.42237-7.5-7.42237-7.5z"
                        fill="#cccccc"
                        fillRule="evenodd"
                    />
                </svg>
            </div>
            <hr className="border border-[#3f3a3a]" />
            <div className="p-2 ">
                <div className="w-full p-2 px-3 hover:bg-[#f1f1f111] cursor-pointer flex items-center rounded-lg">
                    <EventIcon />
                    <p className="px-3 text-[#a5a5a5] text-sm">Events</p>
                </div>
            </div>
            <hr className="border border-[#3f3a3a]" />
            <CategoriesToggle categoryName={"TEXT CHANNELS"} >
                <div className="" onClick={() => navigate('/messages')}>
                    <Channels text={"general"} type={"text"} />
                </div>
            </CategoriesToggle>
            <CategoriesToggle categoryName={"VOICE CHANNELS"} >
                <div className="" onClick={() => navigate('/voice')}>
                    <Channels text={"general"} type={"voice"} />
                </div>
            </CategoriesToggle>
            <div className="w-full p-3 h-fit rounded-lg flex gap-3 bg-[#232428] mt-auto">
                <div className="rounded-full bg-[#09788b]  flex justify-center items-center cursor-pointer p-2">
                    <DiscordIcon width='25px' height='25px' />
                </div>
                <div className="h-10">
                    <h3 className="text-sm ">Aditya</h3>
                    <p className='text-[12px]'>online</p>
                </div>
                <div className="h-10 flex items-center gap-2 ml-auto">
                    <MicIcon />
                    <HeadphonesIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>

    )
}
