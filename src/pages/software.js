import React, { useEffect } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

export default () => {
    useEffect(() => {
        document.title = 'Mullets | Software'
    }, []);

    return (
        <div class="app"  className="App">
            <div class="panel">
                <Header/>

                <Footer/>
            </div>
        </div>
    )
}