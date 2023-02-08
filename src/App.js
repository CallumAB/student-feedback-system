import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Home from "./pages/Home";
import Contact from "./pages/contact/Contact"
import Survey from "./pages/Survey"
import {Routes, Route} from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <div>
      <AuthProvider>
        <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>    
              <Route path='/' element={<Home/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/contact' element={<ProtectedRoute><Contact/></ProtectedRoute>}/>   
              <Route path='/survey' element={<ProtectedRoute><Survey/></ProtectedRoute>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
