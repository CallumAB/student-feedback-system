import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Home from "./pages/Home";
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
              <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
              <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
              <Route path='/survey' element={<ProtectedRoute><Survey/></ProtectedRoute>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
