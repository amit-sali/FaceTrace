import './App.css'
import Home from './components/Home'
import SignUp from './components/Signup'
import Login from './components/Login'
import {Routes, Route} from 'react-router-dom'
import Card from './components/Card'

// { Switch is now Route in react-router-dom v6} 
function App() {
 
  return (
    <>
    {/* <Card/> */}

      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/login' Component={Login} />
        <Route exact path='/register' Component={SignUp} />
      </Routes>
    </>
  )
}

export default App
