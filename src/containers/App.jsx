import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Principal from '../components/Principal';
import Portfolio from '../components/Portfolio';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

import '../assets/App.scss';

const App = () => (
    <div className="App">
        <Header />
        <Hero />
        <Principal />
        <Portfolio />
        <Contacts />
        <Footer />
    </div>
);

export default App;