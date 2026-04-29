import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // ✅ ADD

export default function AuthSuccess() {
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ ADD

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      login(token); // ✅ CHANGE (NOT localStorage)
      navigate("/", { replace: true });
    } else {
      navigate("/login");
    }
  }, []);

  return <p>Logging you in...</p>;
}