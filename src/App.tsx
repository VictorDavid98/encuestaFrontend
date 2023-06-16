

import { start } from "repl";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { AuthProvider } from "./context/authContext";
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";




function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route component={Home} exact path="/home"></Route>
          <Route component={Login} exact path="/login"></Route>
          <Route component={Register} exact path="/register"></Route>
        </Switch>
        
      </Router>

    </AuthProvider>
    
  );
}

export default App;
