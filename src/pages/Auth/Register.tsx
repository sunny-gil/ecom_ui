import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#f6fbf6] px-6">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
      >

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center">
          Create Account
        </h2>

        <p className="text-sm text-gray-500 text-center mt-2">
          Join us for better health care
        </p>

        {/* Form */}
        <div className="mt-6 space-y-4">

          <input
            placeholder="Full Name"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
          />

          <input
            placeholder="Email"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
          />

          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 bg-[var(--color-primary)] text-white rounded-xl font-medium hover:opacity-90 transition"
          >
            Register
          </button>

        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* 🔥 Social + Phone */}
        <div className="space-y-3">

          {/* Google */}
          <button className="w-full py-3 border rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Phone */}
          <button className="w-full py-3 border rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            📱 Continue with Phone
          </button>

        </div>

        {/* Login redirect */}
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