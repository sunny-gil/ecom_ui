import { productsData } from './productsData';
import { blogsData } from './blogsData';
import { newsData } from './newsData';
import { servicesList } from './servicesData';
import { testimonials } from './testimonialsData';
import { slides } from './homeData';

// Helper to simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiService = {
  // Products
  getProducts: async () => {
    await delay(500);
    return productsData;
  },
  getProductById: async (id: number) => {
    await delay(500);
    return productsData.find((p) => p.id === id);
  },

  // Blogs
  getBlogs: async () => {
    await delay(500);
    return blogsData;
  },
  getBlogById: async (id: number) => {
    await delay(500);
    return blogsData.find((b) => b.id === id);
  },

  // News
  getNews: async () => {
    await delay(500);
    return newsData;
  },
  getNewsById: async (id: number) => {
    await delay(500);
    return newsData.find((n) => n.id === id);
  },

  // Services
  getServices: async () => {
    await delay(500);
    return servicesList;
  },

  // Testimonials
  getTestimonials: async () => {
    await delay(500);
    return testimonials;
  },

  // Home Slides
  getHomeSlides: async () => {
    await delay(500);
    return slides;
  },
};
