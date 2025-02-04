import "./App.css";

import SignUp from "./components/Signup";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

// { Switch is now Route in react-router-dom v6}
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" Component={Intro} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={SignUp} />
      </Routes>
    </>
  );
}

export default App;
