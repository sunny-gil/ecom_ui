import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ServicesPage from "../pages/Services/ServicesPage";
import BookAppointment from "../pages/BookAppointment/BookAppointment";
import Products from "../pages/Products/Products";
import ProductDetail from "../pages/Products/ProductDetail";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetail from "../pages/Blogs/BlogDetail";
import Testimonials from "../pages/Testimonials/Testimonials";
import News from "../pages/News/News";
import NewsDetail from "../pages/News/NewsDetail";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import AuthSuccess from "../pages/Auth/AuthSuccess";
import { ProtectedRoute } from "../components/common/ProtectedRoute";
import Profile from "../pages/Profile/Profile";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Notifications from "../pages/Notifications/Notifications";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
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
        
        {/* Protected Routes */}
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}