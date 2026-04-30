import Chatbot from "./components/common/Chatbot";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <AppRoutes />
          <Chatbot />
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;