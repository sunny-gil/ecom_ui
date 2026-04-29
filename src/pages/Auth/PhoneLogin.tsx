// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber
// } from "firebase/auth";
// import { auth } from "../firebase";

// export default function PhoneLogin() {
//   const [phone, setPhone] = useState("");
//   const navigate = useNavigate();

//   const sendOTP = async () => {
//     if (!phone) return alert("Enter phone");

//     const recaptcha = new RecaptchaVerifier(
//       "recaptcha-container",
//       { size: "invisible" },
//       auth
//     );

//     try {
//       const confirmation = await signInWithPhoneNumber(
//         auth,
//         phone,
//         recaptcha
//       );

//       window.confirmationResult = confirmation;

//       navigate("/verify-otp");
//     } catch (err) {
//       alert("OTP failed");
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center">
//       <div className="bg-white p-6 rounded-xl shadow w-[350px]">

//         <h2 className="text-xl font-bold text-center">
//           Enter Phone
//         </h2>

//         <input
//           placeholder="+91XXXXXXXXXX"
//           className="w-full p-3 border mt-4"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />

//         <button
//           onClick={sendOTP}
//           className="w-full mt-4 py-3 bg-[var(--color-primary)] text-white rounded-xl"
//         >
//           Send OTP
//         </button>

//         <div id="recaptcha-container"></div>

//       </div>
//     </section>
//   );
// }