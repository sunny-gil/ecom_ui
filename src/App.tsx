import Chatbot from "./components/common/Chatbot";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import CustomCursor from "./components/common/CustomCursor";
import ScrollProgress from "./components/common/ScrollProgress";

function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
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