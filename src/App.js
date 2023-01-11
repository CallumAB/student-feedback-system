import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';
import QuestionCard from "./components/QuestionCard";

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<QuestionCard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
