import { productsData } from "./productsData";
import { blogsData } from "./blogsData";
import { newsData } from "./newsData";
import { servicesList } from "./servicesData";
import { testimonials } from "./testimonialsData";
import { slides } from "./homeData";

const API_URL = import.meta.env.VITE_API_URL;


// Helper to handle API requests
const request = async (path: string, options: RequestInit = {}) => {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const res = await fetch(`${API_URL}${path}`, { ...options, headers });
  
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Unknown error" }));
    throw new Error(error.message || "Request failed");
  }

  return res.json();
};

export const apiService = {
  // Products
  getProducts: () => request("/v1/products")
    .then(data => data && data.length > 0 ? data.map((item: any) => ({ ...item, id: item._id })) : productsData)
    .catch(() => productsData),
  getProductById: (id: string) => request(`/v1/products/${id}`)
    .then(item => ({ ...item, id: item._id }))
    .catch(() => productsData.find(p => p.id === id)),
  createProduct: (data: any) => request("/v1/products", { method: "POST", body: JSON.stringify(data) }),
  updateProduct: (id: string, data: any) => request(`/v1/products/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  deleteProduct: (id: string) => request(`/v1/products/${id}`, { method: "DELETE" }),

  // Blogs
  getBlogs: () => request("/v1/blogs")
    .then(data => data && data.length > 0 ? data.map((item: any) => ({ ...item, id: item._id })) : blogsData)
    .catch(() => blogsData),
  getBlogById: (id: string) => request(`/v1/blogs/${id}`)
    .then(item => ({ ...item, id: item._id }))
    .catch(() => blogsData.find(b => b.id === id)),
  createBlog: (data: any) => request("/v1/blogs", { method: "POST", body: JSON.stringify(data) }),
  updateBlog: (id: string, data: any) => request(`/v1/blogs/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  deleteBlog: (id: string) => request(`/v1/blogs/${id}`, { method: "DELETE" }),

  // News
  getNews: () => request("/v1/news")
    .then(data => data && data.length > 0 ? data.map((item: any) => ({ ...item, id: item._id })) : newsData)
    .catch(() => newsData),
  getNewsById: (id: string) => request(`/v1/news/${id}`)
    .then(item => ({ ...item, id: item._id }))
    .catch(() => newsData.find(n => n.id === id)),
  createNews: (data: any) => request("/v1/news", { method: "POST", body: JSON.stringify(data) }),
  updateNews: (id: string, data: any) => request(`/v1/news/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  deleteNews: (id: string) => request(`/v1/news/${id}`, { method: "DELETE" }),

  // Services
  getServices: () => request("/v1/services")
    .then(data => data && data.length > 0 ? data.map((item: any) => ({ ...item, id: item._id })) : servicesList)
    .catch(() => servicesList),
  createService: (data: any) => request("/v1/services", { method: "POST", body: JSON.stringify(data) }),
  updateService: (id: string, data: any) => request(`/v1/services/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  deleteService: (id: string) => request(`/v1/services/${id}`, { method: "DELETE" }),

  // Testimonials
  getTestimonials: () => request("/v1/testimonials")
    .then(data => data && data.length > 0 ? data.map((item: any) => ({ ...item, id: item._id })) : testimonials)
    .catch(() => testimonials),
  createTestimonial: (data: any) => request("/v1/testimonials", { method: "POST", body: JSON.stringify(data) }),
  deleteTestimonial: (id: string) => request(`/v1/testimonials/${id}`, { method: "DELETE" }),

  // Home Slides
  getHomeSlides: () => request("/v1/home-slides")
    .then(data => data && data.length > 0 ? data.map((item: any) => ({ ...item, id: item._id })) : slides)
    .catch(() => slides),
  createHomeSlide: (data: any) => request("/v1/home-slides", { method: "POST", body: JSON.stringify(data) }),
  updateHomeSlide: (id: string, data: any) => request(`/v1/home-slides/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  deleteHomeSlide: (id: string) => request(`/v1/home-slides/${id}`, { method: "DELETE" }),


  // Auth
  register: (data: any) => request("/v1/auth/register", { method: "POST", body: JSON.stringify(data) }),
  login: (data: any) => request("/v1/auth/login", { method: "POST", body: JSON.stringify(data) }),

  // Users / Profile
  getProfile: () => request("/v1/users/profile"),
  updateProfile: (data: any) => request("/v1/users/profile", { method: "PATCH", body: JSON.stringify(data) }),
};
