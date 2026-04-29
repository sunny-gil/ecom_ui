import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ServicesPage from "../pages/Services/ServicesPage";
import BookAppointment from "../pages/BookAppointment/BookAppointment";
import Products from "../pages/Products/Products";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetail from "../pages/Blogs/BlogDetail";
import Testimonials from "../pages/Testimonials/Testimonials";
import News from "../pages/News/News";
import NewsDetail from "../pages/News/NewsDetail";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import AuthSuccess from "../pages/Auth/AuthSuccess";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/auth-success" element={<AuthSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}