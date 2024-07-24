import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Profil from './pages/Profil';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profil/>} />
        <Route path='/Sign-up' element={<SignUp/>} />
        <Route path='/sign-in' element={<SignIn/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
