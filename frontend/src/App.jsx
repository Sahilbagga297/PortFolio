import React from 'react'
import { Routes , Route, Router } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import RegistrationForm from './pages/Contact.jsx'
import Work from './pages/work.jsx'
import Skills from './pages/skills.jsx'

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<RegistrationForm />} />
      <Route path="Skills" element={<Skills />} />
      <Route path="Work" element={<Work />}/>
    </Route>
  </Routes>
  
  );
};

export default App;

