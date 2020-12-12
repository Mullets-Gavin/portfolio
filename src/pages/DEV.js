import React from 'react';
import '../stylesheets/styles.css';

import Skills from '../components/skills.js'
import About from '../components/about.js'
import Info from '../components/info.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Testimonials from '../components/testimonials.js'
import Career from '../components/career.js'

export default () => {
    return (
        <div class="app"  className="App">
            <div class="panel">

                <Header/>

                <Info/>

                <About/>

                <Skills/>

                <Testimonials/>

                <Career/>

                <Footer/>

            </div>
        </div>
    )
}