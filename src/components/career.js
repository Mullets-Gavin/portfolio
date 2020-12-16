import React from 'react'
import Work from './work.js'

import Roblox from '../images/roblox.png'

export default () => {
    return (
        <div class="work">
            <h1 class="work-main">Career</h1>

            <Work
                img={Roblox}
                title="Intern"
                date="Sept 2020 - Dec 2020"
                info="Game development platform with millions of players"

                desc1="Design & create a game with 3 other interns"
                desc2="Lead programmer on systems and UI/UX"
                desc3="Work alongside Roblox's professional teams"

                accomp1="Designed a unique & creative game with the help of Roblox"
                accomp2="Developed a Lua library loader to streamline development"
                accomp3="Created various open source packages for Roblox gamedev"
            />
            
            <br/>

            <Work
                img={Roblox}
                title="Volunteer"
                date="Oct 2019 - Dec 2020"
                info="Game development platform with millions of players"

                desc1="Post Approval/Community Editor teams on the Developer Forums"
                desc2="Helped guide new developers to grow their skillset"
                desc3="Approved posts to help developers create insightful topics"

                accomp1="Helped the community on the platform"
                accomp2="Worked with Roblox directly to contribute to the forums"
                accomp3="Met new people & had a great time"
            />
        </div>
    )
}