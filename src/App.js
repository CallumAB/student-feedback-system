import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/About' element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
