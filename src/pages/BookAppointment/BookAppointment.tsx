import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import AppointmentForm from "./components/AppointmentForm";

export default function BookAppointment() {
  return (

    <>
    <Header />
    <div>
      <h1>Book Appointment</h1>
      <AppointmentForm />
    </div>
    <Footer />
    </>
  );
}