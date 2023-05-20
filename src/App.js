import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact"
import Chat from "./pages/chat/Chat";
import Survey from "./pages/surveys/Survey"
import {Routes, Route} from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import FindSurvey from "./pages/surveys/components/FindSurvey";

import './globals.css'


function App() {

  return (
    <div>
      <AuthProvider>
        <Navbar/>
        <Routes>
              <Route path='/findsurvey' element={<FindSurvey/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>    
              <Route path='/' element={<Home/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/contact' element={<ProtectedRoute><Contact/></ProtectedRoute>}/>   
              <Route path='/chat' element={<ProtectedRoute><Chat/></ProtectedRoute>}/>   
              <Route path='/survey' element={<ProtectedRoute><Survey/></ProtectedRoute>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
