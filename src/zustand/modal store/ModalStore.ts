
import { create } from "zustand";

export interface ModalState {
    CreateServerModal: boolean;
    EditServerModal:boolean,
    ImagePreviewModal:boolean,
    setCreateServerModal: () => void;
    setEditServerModal: () => void;
    setImagePreviewModal: () => void;
}

export const useModalStore = create<ModalState>((set)=>({
    CreateServerModal:false,
    EditServerModal:false,
    ImagePreviewModal:false,
    setCreateServerModal:()=> set((state) => ({ CreateServerModal:!state.CreateServerModal })),
    setEditServerModal:()=> set((state) => ({ EditServerModal:!state.EditServerModal })),
    setImagePreviewModal:()=> set((state) => ({ ImagePreviewModal:!state.ImagePreviewModal })),
}))
