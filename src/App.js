import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";


function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path = "/login" element = {<Login/>} exact/>
          <Route path = "/signup" element = {<Signup/>} exact/>
          <Route path = "/user" element = {<Welcome/>} exact/>


        </Routes>
      </main>

    </div>
  );
}

export default App;
