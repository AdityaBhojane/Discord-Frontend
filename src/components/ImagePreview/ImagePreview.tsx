import {
    Modal,
    ModalContent,
} from "@nextui-org/react";
import { useModalStore } from "../../zustand/modal store/ModalStore";



const ImagePreview= ({image}:{image:string}) => {
    const ImagePreviewModal = useModalStore((state) => state.ImagePreviewModal);
    const setImagePreviewModal = useModalStore((state) => state.setImagePreviewModal);

    return (
        <>
            <Modal
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                isOpen={ImagePreviewModal}
                onOpenChange={setImagePreviewModal}
                backdrop="transparent"
                radius="sm"
                size="3xl"
                className=""
            >
                <ModalContent className="bg-[#111214]">
                    <>
                        <div className="p-2 py-3 flex flex-col gap-2 mt-5 mb-2">
                           <img src={image} alt="preview-image" />
                        </div>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ImagePreview;
