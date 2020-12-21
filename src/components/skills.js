import React from "react"

import Coding from '../images/coding.png'
import Gaming from '../images/gaming.png'
import Softwaring from '../images/software.png'

export default () => {
    return (
        <div class="skills">
            <h1>Skills</h1>

            <div class="skills-container">
                <div class="skills-content">
                    <div class="skills-column">
                        <img class="skills-img" alt="Coding!" src={Coding}></img>
                        <h2 class="skills-title">Programming</h2>

                        <br/>

                        <p class="skills-body">
                            I enjoy solving complex puzzles which can accomplish a goal to create a quality product.
                        </p>

                        <h3 class="skills-head">Languages I know:</h3>

                        <ul class="skills-list">
                            <li>Lua</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </div>

                    <div class="skills-column">
                        <img class="skills-img" alt="Gaming!" src={Gaming}></img>
                        <h2 class="skills-title">Game Design</h2>

                        <br/>

                        <p class="skills-body">
                            Designing games for all ages to create memorable experiences people will cherish throughout their life.
                        </p>

                        <h3 class="skills-head">Skills & Analytics:</h3>

                        <ul class="skills-list">
                            <li>Creativity</li>
                            <li>Collaborative</li>
                            <li>Passionate</li>
                            <li>Time Management</li>
                            <li>Microsoft PlayFab</li>
                        </ul>
                    </div>

                    <div class="skills-column">
                        <img class="skills-img" alt="Softwaring!" src={Softwaring}></img>
                        <h2 class="skills-title">Software</h2>

                        <br/>

                        <p class="skills-body">
                            A high understanding & proficiency of how commonly used software technologies is used.
                        </p>

                        <h3 class="skills-head">Technologies:</h3>

                        <ul class="skills-list">
                            <li>React</li>
                            <li>Terminal</li>
                            <li>Git</li>
                            <li>GSuite</li>
                            <li>Roblox</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}