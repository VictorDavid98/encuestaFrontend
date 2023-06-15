import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { AuthProvider } from "./context/authContext";



function App() {
  return (
    <AuthProvider>

      <Register></Register>

    </AuthProvider>
    
  );
}

export default App;
