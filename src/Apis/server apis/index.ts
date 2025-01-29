import axiosConfig from "../../config/axiosConfig";
import { IServer } from "../../Interfaces/server";
import { ErrorHandler } from "../Error Helper/ErrorHandler";



export const createServerRequest = async ({ name, description, token }:IServer) => {
    try {
        const response = await axiosConfig.post('/servers/create', {
            name,
            description
        },{
            headers:{
                "x-access-token":token
            }
        });
        return response.data;
    } catch(error) {
        console.log(error)
        ErrorHandler(error)    
    }
};

export const getAllServerRequest = async ({token}:{token:string}) => {
    try {
        const response = await axiosConfig.get('/servers',{
            headers:{
                "x-access-token":token
            }
        });
        return response.data.data;
    } catch(error) {
        console.log(error)
        ErrorHandler(error)    
    }
};

export const getServerByIdRequest = async ({token, serverId}:{token:string, serverId:string | undefined}) => {
    try {
        const response = await axiosConfig.get(`/servers/${serverId}`,{
            headers:{
                "x-access-token":token
            }
        });
        return response.data.data;
    } catch(error) {
        console.log(error)
        ErrorHandler(error)    
    }
};


