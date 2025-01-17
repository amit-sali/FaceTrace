import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import {Routes, Route} from 'react-router-dom'

// it is now Route { Switch is now Route in react-router-dom v6} 
function App() {
 
  return (
    <>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/login' Component={Login} />
        <Route exact path='/register' Component={Register} />
      </Routes>
    </>
  )
}

export default App
