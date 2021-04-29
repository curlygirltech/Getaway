import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState } from "react";
// import Nav from './Layout/Nav'
import Layout from "./Layout/Layout";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { loginUser, registerUser } from "./services/auth";


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory();

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register handleRegister={ handleRegister } />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
