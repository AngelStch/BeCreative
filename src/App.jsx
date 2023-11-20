import Preloader from "./components/Preloader.jsx"
import PageBorder from "./components/PageBorder.jsx"
import Home from "./components/Home.jsx"
import {Routes, Route } from 'react-router-dom'
import PageMenu from "./components/HeaderMenu.jsx"
import About from "./components/About.jsx"
import Gallery from "./components/Gallery.jsx"
import Services from "./components/Services.jsx"
import Testimonials from "./components/Testimonials.jsx"
import Pricing from "./components/Prising.jsx"
import Clients from "./components/Clients.jsx"
import Create from "./components/Create.jsx"

function App() {
  return (
    <>
      <Preloader />
      <PageMenu />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/testimonials' element={<Testimonials/>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path='/pricing' element={<Pricing/>}/>

        </Routes>
      <PageBorder />
      <div id="wrapper">
      </div>
    </>


  )
}

export default App
