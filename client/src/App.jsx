import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Registration } from './components/Registration';
import { Logout } from './components/Logout';
import { StaffRegistration } from './components/StaffRegistration';
import {StudentRegistration } from './components/StudentRegistration';
import { Navbar } from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="Logout" element={<Logout />} />
          <Route path="StaffRegistration" element={<StaffRegistration />} />
          <Route path="StudentRegistration" element={<StudentRegistration />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
