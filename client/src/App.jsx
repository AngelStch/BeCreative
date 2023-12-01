import Preloader from "./components/Preloader.jsx"
import PageBorder from "./components/PageBorder.jsx"
import { Routes, Route } from 'react-router-dom'
import Create from "./components/CreateComponents/CreateStory.jsx"
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Header from "./components/Header/HeaderMenu.jsx"
import CreateOptions from "./components/CreateComponents/CreateOptions.jsx"
import Register from "./components/Register/Register.jsx"
import Login from "./components/Login/Login.jsx"
import All from "./components/Gallery/All/All.jsx"
import Photos from "./components/Gallery/Photos/Photos.jsx"
import Stories from "./components/Gallery/Story/Stories.jsx"
import { AuthProvider } from './contexts/authContext';
import Path from './path';
import Logout from "./components/Logout/Logout.jsx"
import StoryDetails from "./components/details/StoryDetails.jsx"
import StoryImageDetails from "./components/details/StoryImageDetails.jsx"

function App() {

  return (
    <>
      <AuthProvider>
          <Preloader />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/create' element={<Create />} />
            <Route path='/options' element={<CreateOptions />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/photosImages' element={<All />} />
            <Route path='/photos' element={<Photos />} />
            <Route path='/stories' element={<Stories />} />
            <Route path="/stories/:storyId" element={<StoryDetails/>} />
            <Route path="/storiesImages/:storyImageId" element={<StoryImageDetails/>} />

            
          </Routes>
          <PageBorder />

      </AuthProvider>

    </>


  )
}

export default App
