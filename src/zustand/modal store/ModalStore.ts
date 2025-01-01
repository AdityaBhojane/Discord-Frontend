
import { create } from "zustand";

export interface ModalState {
    CreateServerModal: boolean;
    EditServerModal:boolean,
    setCreateServerModal: () => void;
    setEditServerModal: () => void;
}

export const useModalStore = create<ModalState>((set)=>({
    CreateServerModal:false,
    EditServerModal:false,
    setCreateServerModal:()=> set((state) => ({ CreateServerModal:!state.CreateServerModal })),
    setEditServerModal:()=> set((state) => ({ EditServerModal:!state.EditServerModal })),
}))
