import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from './Aboutus';
import Home from './Home';
import Error from './Error';
import Contactus from './Contactus';
import Services from './Services';
import EyelashExtention from './EyelashExtention';
import Header from './components/Header';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Haircut from './Haircut';
import Pedicure from './Pedicure';
import Waxing from './Waxing';
import Pricing from './Pricing';
import Gallery from './Gallery';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Topbar/>
        <Header/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/services" element={<Services/>} >
            <Route path="eyelash-extension" element={<EyelashExtention />} />
            <Route path="haircut" element={<Haircut />} />
            <Route path="pedicure-and-manicure-and-sns" element={<Pedicure />} />
            <Route path="waxing-and-facial" element={<Waxing />} />
          </Route>

          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="*" element={<Error/>} />
        </Routes>

        <Footer/>
      </BrowserRouter>
      




    </>
  )
}

export default App