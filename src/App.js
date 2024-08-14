import './App.css';
import Home from './components/Pages/Home'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AboutUs from './components/Pages/AboutUs'
import Services from './components/Pages/Services'
import OurMenu from './components/Pages/OurMenu'
import ContactUs from './components/Pages/ContactUs'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
  <>
  <Router>
    <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/aboutus' element={<AboutUs/>}></Route>
    <Route path='/services' element={<Services/>}/>
    <Route path='/ourmenu' element={<OurMenu/>}/>
    <Route path='/contact' element={<ContactUs/>}></Route>
    </Routes>
    <Footer></Footer>
    </Router>
    </>
  
  );
}

export default App;
