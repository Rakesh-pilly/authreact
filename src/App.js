import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import { useSelector } from "react-redux";


function App() {
  const isLogginIn = useSelector(state=> state.islogggin);
  console.log(isLogginIn)
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path = "/login" element = {<Login/>} exact/>
          <Route path = "/signup" element = {<Signup/>} exact/>
         
         
         { isLogginIn && <Route path = "/user" element = {<Welcome/>} exact/>}


        </Routes>
      </main>

    </div>
  );
}

export default App;
