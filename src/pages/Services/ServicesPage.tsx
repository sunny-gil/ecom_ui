import Services from "./Services";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useEffect } from "react";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  );
}