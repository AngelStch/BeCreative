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
import EditStoryImage from "./components/edit/EditStoryImage.jsx"
import Editstory from "./components/edit/EditStory.jsx"
import AuthGuard from "./guards/AuthGuard.jsx"
import ErrorBoundary from "./components/ErrorBoundry.jsx"
import Erorr from "./components/404/404.jsx"

function App() {

  return (
    <>
      <ErrorBoundary>
        <AuthProvider>
          <Preloader />
          <Header />
          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.About} element={<About />} />
            <Route path={Path.Register} element={<Register />} />
            <Route path={Path.Login} element={<Login />} />

            <Route element={<AuthGuard />}>
              <Route path={Path.PhotosImages} element={<All />} />
              <Route path={Path.Photos} element={<Photos />} />
              <Route path={Path.Stories} element={<Stories />} />
              <Route path={Path.DetailsStory} element={<StoryDetails />} />
              <Route path={Path.DetailsStoryImage} element={<StoryImageDetails />} />
              <Route path={Path.Options} element={<CreateOptions />} />
              <Route path={Path.EditStory} element={<Editstory />} />
              <Route path={Path.EditStoryImage} element={<EditStoryImage />} />
              <Route path={Path.Create} element={<Create />} />
              <Route path={Path.Logout} element={<Logout />} />
            </Route>

            <Route path={Path.Errors} element={<Erorr />} />
          </Routes>
          <PageBorder />
        </AuthProvider>
      </ErrorBoundary>
    </>
  )
}

export default App
