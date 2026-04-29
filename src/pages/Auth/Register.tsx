import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { registerUser } from "../../api/auth";
import Swal from "sweetalert2";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error] = useState("");

  const handleRegister = async () => {
    if (!form.name || !form.email || !form.password) {
      return Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "All fields are required",
      });
    }

    try {
      setLoading(true);

      const res = await registerUser(form);

      console.log("API RESPONSE:", res);

      // ✅ SUCCESS (backend reliable check)
      if (res?.success) {
        await Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: res?.message || "Account created successfully",
        });


        navigate("/login");
      }
      // ❌ FAIL
      else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: res?.message || "Something went wrong",
        });
      }

    } catch (err) {
      console.error(err);

      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Unable to connect. Try again.",
      });

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
          Create Account
        </h2>

        <p className="text-sm text-gray-500 text-center mt-2">
          Join us for better health care
        </p>

        <div className="mt-6 space-y-4">
          <input
            placeholder="Full Name"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
          />

          <input
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

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full py-3 bg-[var(--color-primary)] text-white rounded-xl font-medium hover:opacity-90 transition"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => {
              window.location.href = `${import.meta.env.VITE_API_URL}/v1/auth/google`;
            }}
            className="w-full py-3 border rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <button className="w-full py-3 border rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            📱 Continue with Phone
          </button>
        </div>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[var(--color-primary)] cursor-pointer font-medium"
          >
            Login
          </span>
        </p>
      </motion.div>
    </section>
  );
}