import React from 'react'
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import Profile from './components/Profile/Profile';
import ProjectPage from './components/ProjectPage/ProjectPage';
import ProjectDetailPage from './components/ProjectPage/ProjectDetailPage';
import FreelancerProposals from './components/Proposal/FreelancerProposals';
import ChatApp from './components/ChatApp/ChatApp';
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/dashboard' element={<ProjectPage />} />
        <Route path='/dashboard/:projectId' element={<ProjectDetailPage />} />
        <Route path='/dashboard/proposals' element={<FreelancerProposals />} />
        <Route path='/chat' element={<ChatApp />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App