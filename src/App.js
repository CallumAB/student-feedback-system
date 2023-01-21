import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Home from "./pages/Home";
// import Survey from "./pages/Survey"
import Survey from "./pages/Survey"
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <Navbar/>
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
