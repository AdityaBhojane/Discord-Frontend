import {
    Modal,
    ModalContent,
    ModalHeader,
    // ModalBody,
    ModalFooter,
    Button,
  } from "@nextui-org/react";

import { useModalStore } from "../../zustand/modal store/ModalStore";
import CreateServerIcon from "../icons svgs/CreateServerIcon";
import ForwardArrow from "../icons svgs/ForwardArrow";

  
const CreateServerModal:React.FC = ()=> {
    const CreateServerModal = useModalStore((state) => state.CreateServerModal);
    const setCreateServerModal = useModalStore((state) => state.setCreateServerModal);
    //  const token = useAuthStore((state) => state.token);
    //   const setToken = useAuthStore((state) => state.setToken);
  
    return (
      <>
        {/* <Button onPress={onOpen}>Open Modal</Button> */}
        <Modal
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          isOpen={CreateServerModal}
          onOpenChange={setCreateServerModal}
        >
          <ModalContent className="bg-[#313338]">
            {(onClose) => (
              <>
              <div className="text-center p-4">
                <ModalHeader className="flex flex-col gap-1 text-xl text-[#ccc]">Create Your Server</ModalHeader>
                <p className="text-[#a8a8a8] text-sm font-thin px-8 relative bottom-3">Your server is where you and your friends hang out. Make yours and start taking</p>
              </div>
              <div className="p-2 border border-[#636363] flex items-center rounded-lg mb-5 hover:bg-[#ffffff10] cursor-pointer m-4">
                <div className="h-12 w-12 rounded-full bg-gray-700 mb-4 cursor-pointer translate-y-2 mx-3">
                  <CreateServerIcon/>
                </div>
                <p className="text-[#ccc] font-bold text-md">Create My Own server</p>
                <ForwardArrow/>
              </div>
                <ModalFooter className="flex flex-col justify-center items-center bg-[#2B2D31] h-22">
                  <p className="text-md font-semibold text-[#b3b3b3]">Already have an invite?</p>
                  <Button 
                  color="default" 
                  variant="light" 
                  onPress={onClose}
                  className="text-white bg-[#4E5058] w-full"
                  >
                    Join a Server
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }

export default CreateServerModal;
  