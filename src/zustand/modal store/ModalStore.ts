
import { create } from "zustand";


export interface ModalState {
    CreateServerModal: boolean;
    EditServerModal:boolean,
    ImagePreviewModal:{
        image:string,
        show:boolean
    },
    InvitePeople:boolean,
    setCreateServerModal: () => void;
    setEditServerModal: () => void;
    setImagePreviewModal: (image:string) => void;
    setInvitePeopleModal: () => void;
}

export const useModalStore = create<ModalState>((set)=>({
    CreateServerModal:false,
    EditServerModal:false,
    ImagePreviewModal:{
        image:'',
        show:false
    },
    InvitePeople:false,
    setCreateServerModal:()=> set((state) => ({ CreateServerModal:!state.CreateServerModal })),
    setEditServerModal:()=> set((state) => ({ EditServerModal:!state.EditServerModal })),
    setImagePreviewModal:(image:string)=> set((state) => ({ImagePreviewModal:{ image, show:!state.ImagePreviewModal.show }})),
    setInvitePeopleModal:()=> set((state) => ({ InvitePeople:!state.InvitePeople })),
}))
