import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Home from "./pages/Home";
import Survey from "./pages/Survey"
import {Routes, Route} from "react-router-dom";
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <div>
      <AuthProvider>
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/survey' element={<Survey/>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
