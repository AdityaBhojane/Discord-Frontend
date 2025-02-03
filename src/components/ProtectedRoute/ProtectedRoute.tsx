import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../zustand/auth store/AuthStore";
import { useEffect } from "react";

export default function ProtectedRoute() {
  const token = useAuthStore(state => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/signin')
    }
  }, [token,navigate])

  return (
    <div>
      <Outlet /> 
    </div>
  );
}
