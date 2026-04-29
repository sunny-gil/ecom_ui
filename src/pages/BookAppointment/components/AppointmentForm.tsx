import { useState } from "react";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err: any = {};

    if (!form.name) err.name = "Name is required";
    if (!form.email.includes("@")) err.email = "Valid email required";
    if (!form.phone || form.phone.length < 10) err.phone = "Valid phone required";
    if (!form.date) err.date = "Select date";
    if (!form.time) err.time = "Select time";
    if (!form.service) err.service = "Select service";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form Data:", form);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Book Your Appointment
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Name */}
        <div>
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
          />
          <p className="text-red-500 text-sm">{errors.name}</p>
        </div>

        {/* Email */}
        <div>
          <input
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
          />
          <p className="text-red-500 text-sm">{errors.email}</p>
        </div>

        {/* Phone */}
        <div>
          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
          />
          <p className="text-red-500 text-sm">{errors.phone}</p>
        </div>

        {/* Service */}
        <div>
          <select
            name="service"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="">Select Service</option>
            <option value="consultation">Consultation</option>
            <option value="therapy">Therapy</option>
            <option value="checkup">General Checkup</option>
          </select>
          <p className="text-red-500 text-sm">{errors.service}</p>
        </div>

        {/* Date */}
        <div>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
          />
          <p className="text-red-500 text-sm">{errors.date}</p>
        </div>

        {/* Time */}
        <div>
          <input
            type="time"
            name="time"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
          />
          <p className="text-red-500 text-sm">{errors.time}</p>
        </div>

        {/* Notes */}
        <div className="md:col-span-2">
          <textarea
            name="notes"
            placeholder="Additional Notes (optional)"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
            rows={4}
          />
        </div>

        {/* Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium shadow-md hover:scale-[1.02] transition"
          >
            Confirm Appointment
          </button>
        </div>
      </form>
    </div>
  );
}