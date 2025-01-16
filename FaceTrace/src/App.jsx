
import './App.css'
import Hero from './components/Hero'
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Hero from './components/Hero'
function App() {
 

  return (
    <>
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>}/>
       </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
