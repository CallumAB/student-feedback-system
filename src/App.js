import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
