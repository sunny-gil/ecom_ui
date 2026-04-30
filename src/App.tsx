import Chatbot from "./components/common/Chatbot";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <OrderProvider>
            <AppRoutes />
            <Chatbot />
          </OrderProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;