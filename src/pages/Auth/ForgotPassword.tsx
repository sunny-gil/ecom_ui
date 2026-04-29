import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleReset = () => {
    if (!email) {
      alert("Enter email");
      return;
    }

    alert("Reset link sent");
    navigate("/login");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#f6fbf6] px-6">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold text-center">
          Reset Password
        </h2>

        <div className="mt-6 space-y-4">

          <Input label="Email" value={email} onChange={setEmail} />

          <button
            onClick={handleReset}
            className="w-full py-3 bg-[var(--color-primary)] text-white rounded-xl"
          >
            Send Reset Link
          </button>

        </div>

      </div>
    </section>
  );
}