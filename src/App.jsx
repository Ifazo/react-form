import { Route, Routes } from 'react-router-dom'
import './App.css'
import ForgetPass from './pages/ForgetPass'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Terms from './pages/Terms'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/forget" element={<ForgetPass />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
