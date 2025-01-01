import {
    Modal,
    ModalContent,
} from "@nextui-org/react";
import { useModalStore } from "../../zustand/modal store/ModalStore";
import InviteIcon from "../icons svgs/InviteIcon";
import SettingsIcon from "../icons svgs/SettingsIcon";
import CreateChannelIcon from "../icons svgs/CreateChannelIcon";
import CreateCategoryIcon from "../icons svgs/CreateCategoryIcon";
import NotificationMini from "../icons svgs/NotificationMini";
import EditProfileIcon from "../icons svgs/EditProfileIcon";



const EditServerModal: React.FC = () => {
    const EditServerModal = useModalStore((state) => state.EditServerModal);
    const setEditServerModal = useModalStore((state) => state.setEditServerModal);

    return (
        <>
            <Modal
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                isOpen={EditServerModal}
                onOpenChange={setEditServerModal}
                backdrop="transparent"
                radius="sm"
                className="absolute top-0 left-12 w-[220px]"
            >
                <ModalContent className="bg-[#111214]">
                    <>
                        <div className="p-2 py-3 flex flex-col gap-2 mt-5 mb-2">
                            <div className="p-2 rounded-sm hover:bg-[#5865F2] flex items-center justify-between cursor-pointer group">
                                <p className="text-[#949CF7] text-sm group-hover:text-white">Invite People</p>
                                <InviteIcon/>
                            </div>
                            <div className="p-2 rounded-sm hover:bg-[#5865F2] flex items-center justify-between cursor-pointer">
                                <p className="text-white text-sm">Server Settings</p>
                                <SettingsIcon/>
                            </div>
                            <div className="p-2 rounded-sm hover:bg-[#5865F2] flex items-center justify-between cursor-pointer">
                                <p className="text-white text-sm">Create Channel</p>
                                <CreateChannelIcon/>
                            </div>
                            <div className="p-2 rounded-sm hover:bg-[#5865F2] flex items-center justify-between cursor-pointer">
                                <p className="text-white text-sm">Create Category</p>
                                <CreateCategoryIcon/>
                            </div>
                            <div className="p-2 rounded-sm hover:bg-[#5865F2] flex items-center justify-between cursor-pointer">
                                <p className="text-white text-sm">Notification Settings</p>
                                <NotificationMini/>
                            </div>
                            <div className="p-2 rounded-sm hover:bg-[#5865F2] flex items-center justify-between cursor-pointer">
                                <p className="text-white text-sm">Edit Server Profile</p>
                                <EditProfileIcon/>
                            </div>
                        </div>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}

export default EditServerModal;
