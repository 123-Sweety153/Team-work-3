import { Route, Routes } from 'react-router'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Properties from '../Pages/Properties/Properties'
import Property from '../Pages/Property/Property'
import Services from '../Pages/Services/Services'
import Contact from '../Pages/Contact/Contact'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/property" element={<Property />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact/>} />
      

    </Routes>
  )
}

export default AllRoutes
