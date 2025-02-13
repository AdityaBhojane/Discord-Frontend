import { useEffect } from "react";
import { useAuthStore } from "../../zustand/auth store/AuthStore"
import { useNavigate } from "react-router-dom";


function ProtectedUser() {
    const navigate = useNavigate()
    const token = useAuthStore(state=> state.token);

    useEffect(()=>{
        if(token){
            navigate('/@me')
        }
    },[navigate, token])

  return (
    <div className="flex justify-center items-center">
        <h1 className="text-2xl">Loading ...</h1>
    </div>
  )
}

export default ProtectedUser