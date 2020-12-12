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
                        <button class="header-button">Home</button>
                        <button class="header-button">Games</button>
                        <button class="header-button">Software</button>
                        <button class="header-button">Contact</button>
                    </div>
                </div>

                <div class="info">
                    <div class="description">
                        <h2 class="description-title">Programmer and Game Developer</h2>
                        <p class="description-content">Creating exciting experiences since 2013</p>

                        <div class="avatar">
                            <img class="avatar-img" alt="Profile Pic" src={ProfilePic}></img>
                        </div>
                    </div>
                </div>

                <div class="about">
                    <div class="about-content">
                        <h1 class="about-title">Hi, my name is Gavin Rosenthal</h1>

                        <p class="about-body">
                            I've been an aspiring programmer and game developer ever since I was introduced to the game platform Roblox in 2013 at the
                            age of twelve. Previously, I’ve volunteered at Roblox as a member of their Post Approval team in their forums, which aims
                            to help users who are starting their Roblox careers to receive the help and knowledge needed to create insightful posts and
                            to learn new skills. I’m also a former intern at the company as an accelerator, where I worked on creating an immersive
                            experience in Roblox alongside some of the best people in the industry, such as professional game designers, product managers,
                            and engineers.
                        </p>
                        
                        <br></br>

                        <p class="about-body">
                            I’m completely self-taught, and I aspire to perfect my craft by practicing & learning new languages and software, such as React.
                            My interests include puzzle solving, creating open source software, and designing & creating websites. When I’m not programming,
                            I like to go for long walks, watch movies with friends, and play Apex Legends.
                        </p>
                    </div>
                </div>

                <div class="skills">
                    <h1 class="skills-title">Skills</h1>

                    <div class="skills-content">
                        <div class="skills-column">
                            wtf
                        </div>
                    </div>
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