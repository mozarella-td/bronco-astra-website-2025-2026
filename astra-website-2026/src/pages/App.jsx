import {  Routes, Route } from 'react-router-dom'
import Home from './home.jsx'
import Team from './team.jsx'
import Drone from './drone.jsx'
import Timeline from './timeline.jsx'
import Testing from './testing.jsx'
import Tips from './tips.jsx'
import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'
import ScrollToTop from '../components/scrollToTop.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/drone' element={<Drone/>}/>
          <Route path='/timeline' element={<Timeline/>}/>
          <Route path='/testing' element={<Testing/>}/>
          <Route path='/tips' element={<Tips/>}/>
      </Routes>
      <Footer/>
    </>
    
  )
}

export default App
