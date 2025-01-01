import { create } from "zustand";

export interface AuthState {
    user: string | null;
    token: string | null;
    setToken: (newToken: string) => void;
    setUser: (newUser: string) => void;
}

export const useAuthStore = create<AuthState>((set)=>({
    user:null,
    token:null,
    setToken:(newToken)=> set({token:newToken}),
    setUser:(newUser)=> set({user:newUser})
}))