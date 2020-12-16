import React, { useEffect } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../stylesheets/styles.css';
import Overview from '../components/overview.js';
import Contact from '../components/contact.js'

export default () => {
    useEffect(() => {
        document.title = 'Mullets | Contact'
    }, []);

    return (
        <div class="app"  className="App">
            <div class="panel">
                <Header/>

                <Overview
                    title="Personal Contact Book"
                    body="You can find all of my social medias, contact information, and any fun links
                    I felt I should include. If you're interested in working with me in any form, please feel
                    free to reach out!"
                />
                <Contact/>

                <Footer/>
            </div>
        </div>
    )
}