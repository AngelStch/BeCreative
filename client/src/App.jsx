import Preloader from "./components/Preloader.jsx"
import PageBorder from "./components/PageBorder.jsx"
import { Routes, Route } from 'react-router-dom'
import Create from "./components/CreateComponents/CreateStory.jsx"
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Gallery from "./components/Gallery/Gallery.jsx"
import Header from "./components/Header/HeaderMenu.jsx"
import CreateOptions from "./components/CreateComponents/CreateOptions.jsx"
import Register from "./components/Register/Register.jsx"
import Login from "./components/Login/Login.jsx"
import All from "./components/Gallery/GalleryElements/All.jsx"
import Photos from "./components/Gallery/GalleryElements/Photos.jsx"
import Stories from "./components/Gallery/GalleryElements/Stories.jsx"
const baseUrl = `http://localhost:3030/jsonstore/stories`
import React, { useEffect, useState } from 'react';



function App() {

  return (
    <>

      <Preloader />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/create' element={<Create />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/options' element={<CreateOptions />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/photosImages' element={<All />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/stories' element={<Stories />} />

      </Routes>
      <PageBorder />
      <div id="wrapper">
      </div>
    </>


  )
}

export default App
