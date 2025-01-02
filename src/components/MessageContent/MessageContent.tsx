import DiscordInput from "../DiscordInput/DiscordInput";
import HashIcon from "../icons svgs/HashIcon";
import MembersIcon from "../icons svgs/MembersIcon";
import { NotificationIcon } from "../icons svgs/NotificationIcon";
import PinIcon from "../icons svgs/PinIcon";
import QuesMarkIcon from "../icons svgs/QuesMarkIcon";
import SearchIcon from "../icons svgs/SearchIcon";

export default function MessageContent() {
    return (
        <div className="flex-1 flex flex-col">
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 bg-[#313338] border-b border-gray-700">
                <div className="flex items-center gap-2 text-[#c3c7ce] text-sm">
                    <HashIcon />
                    <p className="text-sm font-semibold">general</p>
                </div>
                <div className="flex items-center gap-2 text-[#c3c7ce] text-sm">
                    <NotificationIcon />
                    <PinIcon />
                    <MembersIcon />
                    <div className="flex items-center ">
                        <input type="text" placeholder='Search' className='bg-[#202225] text-[#96989D] py-1 w-full text-sm  px-3 ' />
                        <SearchIcon />
                    </div>
                    <QuesMarkIcon />
                </div>
            </div>
            <hr className='border-[#404247]' />
            {/* Content */}
            <div className="flex h-full">
                <div className="flex-1 flex flex-col  justify-center bg-[#313338]">
                    <DiscordInput />
                </div>

            </div>
        </div>
    )
}
