// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function VerifyOTP() {
//   const [otp, setOtp] = useState("");
//   const navigate = useNavigate();

//   const verifyOTP = async () => {
//     try {
//       const result = await window.confirmationResult.confirm(otp);

//       localStorage.setItem("user", JSON.stringify(result.user));

//       navigate("/");
//     } catch (err) {
//       alert("Invalid OTP");
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center">
//       <div className="bg-white p-6 rounded-xl shadow w-[350px]">

//         <h2 className="text-xl font-bold text-center">
//           Enter OTP
//         </h2>

//         <input
//           placeholder="Enter OTP"
//           className="w-full p-3 border mt-4"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//         />

//         <button
//           onClick={verifyOTP}
//           className="w-full mt-4 py-3 bg-[var(--color-primary)] text-white rounded-xl"
//         >
//           Verify OTP
//         </button>

//       </div>
//     </section>
//   );
// }