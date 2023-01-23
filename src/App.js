import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Home from "./pages/Home";
// import Survey from "./pages/Survey"
import Survey from "./pages/Survey"
import {Routes, Route} from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider"
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";



function App() {

  return (
    <div>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/survey' element={<Survey/>}/>/   
      </Routes>
    </div>
  );
}

export default App;
