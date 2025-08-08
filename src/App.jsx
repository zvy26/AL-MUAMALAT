import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/main';
import Contact from './pages/Contact/main';
import InternationalPrograms from './pages/Programs/InternationalProgram/main'
import SpecializedCourses from './pages/Programs/SpecializedCourses/main'
import IslamicFinance from './pages/Programs/IslamicFinance/main';
import Certification from './pages/Programs/Certification/main';
import SignIn from  './pages/AuthPage/Login/main'
import Register from  './pages/AuthPage/Register/main'




const App = () => {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route 
          path="/contact" 
          element=  {
            <>
            <Navbar/>
            <Contact/>
            <Footer/>
            </>
          } 
        />
        <Route 
          path="/InternationalPrograms" 
          element=  {
            <>
            <Navbar/>
            <InternationalPrograms/>
            <Footer/>
            </>
          } 
        />
        <Route 
          path="/SpecializedCourses" 
          element=  {
            <>
            <Navbar/>
            <SpecializedCourses/>
            <Footer/>
            </>
          } 
        />
          <Route 
          path="/IslamicFinance" 
          element=  {
            <>
            <Navbar/>
            <IslamicFinance/>
            <Footer/>
            </>
          } 
        />
          <Route 
          path="/Certification" 
          element=  {
            <>
            <Navbar/>
            <Certification/>
            <Footer/>
            </>
          } 
        />
          <Route 
          path="/Login" 
          element=  {
            <>
          <SignIn/>
            </>
          } 
        />
        <Route 
          path="/Register" 
          element=  {
            <>
          <Register/>
            </>
          } 
        />

      </Routes>
  );
};

export default App;