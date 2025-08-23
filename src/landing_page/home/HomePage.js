import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../footer';

function HomePage() {
    return ( 
        <>
             <Navbar />
            <Hero />
            <Awards/>
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <footer />

            

        </>
     );
}

export default HomePage;