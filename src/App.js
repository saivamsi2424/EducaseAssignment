import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import CreateAccount from './components/CreateAccount'
import SignIn from './components/SignIn'
import AccountSettings from './components/AccountSettings'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/CreateAccount" component={CreateAccount} />
    <Route exact path="/SignIn" component={SignIn} />
    <Route exact path="/AccountSettings" component={AccountSettings} />
  </Switch>
)

export default App
