import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Principal from '../components/Principal';
import Portfolio from '../components/Portfolio';
// import ContactUs from '../components/ContactUs';
// import Contacts from '../components/Contacts';
import Contactos from '../components/Contactos';
import Footer from '../components/Footer';

import '../assets/App.scss';

const App = () => (
    <div className="App">
        <Header />
        <Hero />
        <Principal />
        <Portfolio />
        {/* <ContactUs /> */}
        {/* <Contacts /> */}
        <Contactos />
        <Footer />
    </div>
);

export default App;