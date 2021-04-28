import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import Nav from './Layout/Nav'
import Layout from './Layout/Layout'
import Login from './screens/Login'

function App() {
  return (
    <div className="App">
    <Layout>
      <Switch>
          <Route path='/login'>
            <Login/>
          </Route>
      </Switch>
      
    </Layout>

    </div>
  );
}

export default App;
