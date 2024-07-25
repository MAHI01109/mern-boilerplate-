import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Profil from './pages/Profil';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Header from './components/Header';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    {/* headr  */}
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profil/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
