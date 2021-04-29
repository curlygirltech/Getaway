import './App.css';
import { Route, Switch } from 'react-router-dom'
import {useState} from 'react'
// import Nav from './Layout/Nav'
import Layout from './Layout/Layout'
import Login from './screens/Login'
import { loginUser } from './services/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData)
    setCurrentUser(userData)
  }
  return (
    <div className="App">
    <Layout>
      <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
      </Switch>
      
    </Layout>

    </div>
  );
}

export default App;
