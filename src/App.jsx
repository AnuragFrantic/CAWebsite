
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { HelmetProvider } from "react-helmet-async";
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import './assets/CSS/style.css'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import Career from './Pages/Career'
import About from './Pages/About'
import Insighthub from './Pages/Insighthub'
import Probono from './Pages/Probono'
// import Expertise from './Pages/Expertise'
import Expertisepage from './Pages/Expertise/Expertisepage'
import Arbitration from './Pages/Expertise/Arbitration'
import Blogsdetails from './Pages/Blogs/Blogsdetails'
import Civil from './Pages/Expertise/Civil'
import Consumer from './Pages/Expertise/Consumer'
import Bankruptacy from './Pages/Expertise/Bankruptacy'
import Criminal from './Pages/Expertise/Criminal'
import Corporate from './Pages/Expertise/Corporate'
import Matriminial from './Pages/Expertise/Matriminial'
import Insightdetails from './Pages/Insighthub/Insightdetails'

function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<WebLayout />}>
        <Route index element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/career' element={<Career />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/insight-hub' element={<Insighthub />} />
        <Route path='/legal-update/:url' element={<Insightdetails />} />
        <Route path='/pro-bono' element={<Probono />} />
        {/* <Route path='/expertise/:url?' element={<Arbitration/>}/> */}
        <Route path='/arbitration' element={<Arbitration />} />
        <Route path='/civil' element={<Civil />} />
        <Route path='/consumer' element={<Consumer />} />
        <Route path='/criminal' element={<Criminal />} />
        <Route path='/corporate' element={<Corporate />} />
        <Route path='/matrimonial' element={<Matriminial />} />
        <Route path='/expertise-page' element={<Expertisepage />} />
        <Route path='/blog-details/:url' element={<Blogsdetails />} />
        <Route path='/bankruptacy' element={<Bankruptacy />} />

      </Route>
    )
  )

  return (
    <>
      <HelmetProvider>
        <RouterProvider router={ThemeRoute} />
      </HelmetProvider>
    </>
  )
}

export default App





