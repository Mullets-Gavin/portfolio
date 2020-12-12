import React from 'react';
import '../stylesheets/styles.css';

// images
import ProfilePic from '../images/pfp.png'

export default () => {
    return (
        <div class="app"  className="App">
            <div class="panel">

                <div class="header">
                    <h1 class="header-title">Mullets.xyz</h1>

                    <div>
                        <button class="header-button">this is text</button>
                        <button class="header-button">this is text</button>
                    </div>
                </div>

                <div class="info">
                    <div class="description">
                        <h2 class="description-title">Programmer and Game Developer</h2>
                        <p class="description-content">I do be programming and making games doe</p>

                        <div class="avatar">
                            <img class="avatar-img" alt="Profile Pic" src={ProfilePic}></img>
                        </div>
                    </div>
                </div>

                <div class="about">
                    <h1>ah fuck</h1>
                </div>

                <div class="footer">
                    <div class="footer-content">
                        <a class="footer-button" target="_blank" rel="noreferrer" href="https://twitter.com/Mullets_Gavin">Twtter</a>
                    </div>
                </div>

            </div>
        </div>
    )
}