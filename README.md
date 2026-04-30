# Abhyudaya UI

Welcome to the **Abhyudaya UI** repository! This is a premium, high-performance web application built for an ultra-premium lifestyle and e-commerce brand. It seamlessly integrates luxury product shopping (Coffee, Organic Food, Cosmetics, Hydration) with exclusive lifestyle services.

## 🚀 Features

- **Ultra-Premium Design:** Crafted with a modern, cinematic aesthetic using Tailwind CSS and custom animations.
- **Dynamic Hero Slider:** A highly interactive, 3D animated hero section showcasing various product categories.
- **Responsive Layout:** Fully responsive across all devices (mobile, tablet, and desktop).
- **Smooth Animations:** Powered by `framer-motion` for fluid page transitions and micro-interactions.
- **Mock API Architecture:** Data is fetched asynchronously via a robust mock API service, paving the way for easy backend integration.
- **Comprehensive Sections:** Includes specialized pages for Products, Services, Blogs, News, Testimonials, and About Us.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** [React Router v6](https://reactrouter.com/)

## 📂 Project Structure

```text
src/
├── animations/       # Reusable Framer Motion variants
├── api/              # Mock API services and static data files
│   ├── apiService.ts # Main API service for data fetching
│   ├── homeData.ts   # Data for the hero slider
│   ├── productsData.ts
│   └── ...
├── assets/           # Images, fonts, and static assets
├── components/       # Reusable UI components (Header, Footer, etc.)
├── context/          # React Context providers (Auth, Theme, etc.)
├── hooks/            # Custom React hooks
├── pages/            # Page-level components
│   ├── Home/
│   ├── Products/
│   ├── Services/
│   ├── Blogs/
│   ├── News/
│   └── Testimonials/
├── routes/           # Application routing configuration
├── utils/            # Helper functions and utilities
├── App.tsx           # Root component
└── main.tsx          # Application entry point
```

## 💻 Local Development

Follow these steps to get the project running locally:

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd abhyudaya-ui
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🔗 API Integration Note

Currently, the application uses a **Mock API Service** located in `src/api/apiService.ts`. This service simulates network latency and asynchronous data fetching. When you are ready to connect to a real backend, simply update the functions in `apiService.ts` to use `fetch` or `axios` calls to your actual API endpoints. No changes to the component logic are required!

---

*Designed and developed with passion for Abhyudaya.*
