import './App.css'
import About from './components/About'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Introduce from './components/Introduce'
import MyProjects from './components/MyProjects'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Testimonials from './components/Testimonials'


function App() {

  return (
    <div className='w-[1920px] border-4'>
      <Navbar></Navbar>
      <Introduce></Introduce>
      <About></About>
      <Services></Services>
      <MyProjects></MyProjects>
      <Testimonials></Testimonials>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  )
}

export default App
