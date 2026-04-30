import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { apiService } from "../../api/apiService";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    if (!form.email || !form.password) {
      return setError("All fields are required");
    }

    try {
      setLoading(true);

      const res = await apiService.login(form);

      if (res?.access_token) {
        login(res.access_token);
        navigate("/");
      } else {
        setError(res?.message || "Login failed");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#f6fbf6] px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-center">
          Welcome Back
        </h2>

        <p className="text-sm text-gray-500 text-center mt-2">
          Login to continue your health journey
        </p>

        <div className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
          />

          <div className="flex justify-end">
            <span
              onClick={() => navigate("/forgot")}
              className="text-sm text-[var(--color-primary)] cursor-pointer"
            >
              Forgot Password?
            </span>
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3 bg-[var(--color-primary)] text-white rounded-xl font-medium hover:opacity-90 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              window.location.href = `${import.meta.env.VITE_API_URL}/v1/auth/google`;
            }}
            className="w-full py-4 border-2 border-gray-100 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 shadow-sm"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
              alt="Google"
            />
            <span className="font-bold text-gray-700">Continue with Google</span>
          </motion.button>
        </div>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-[var(--color-primary)] cursor-pointer font-medium"
          >
            Sign up
          </span>
        </p>
      </motion.div>
    </section>
  );
}