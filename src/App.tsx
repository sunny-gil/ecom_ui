import Chatbot from "./components/common/Chatbot";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <AppRoutes />
        <Chatbot />
      </AuthProvider>
    </>
  );
}

export default App;