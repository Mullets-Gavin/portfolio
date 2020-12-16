import React from 'react';
import Content from './content.js'

import Loader from '../images/loader.png'
import Roblox from '../images/robloxmodules.png'
import Manager from '../images/manager.png'
import Network from '../images/network.png'

export default () => {
    return (
        <div class="games">
            <Content
                img={Loader}
                name="Loader"
                tldr="A Roblox Luau lazy-library loader with built-in libraries and functions."
                link="https://github.com/Mullets-Gavin/Loader"
                title1="About"
                about="Loader was designed to streamline module loading and provide a way to lazy-load
                modules without having to include paths, and comes with built-in libraries to further
                streamline development."
                title2="Features"
                stats1="Lazy-load modules by strings"
                stats2="Import Roblox services quickly"
                stats3="Libraries for DataStores, Interface, and more"
            />

            <br/>

            <Content
                img={Manager}
                name="Manager"
                tldr="A custom Roblox manager for connections, events, task scheduler, and custom wrap calls all without the hassle of memory."
                link="https://github.com/Mullets-Gavin/Manager"
                title1="About"
                about="Manager was designed to handle any connections, events, and general programming
                that I found myself needing to require multiple modules for."
                title2="Features"
                stats1="Custom coroutines"
                stats2="Formatting for numbers & data compression"
                stats3="A task scheduler, connection wrapper, and accurate waits"
            />

            <br/>

            <Content
                img={Network}
                name="Network"
                tldr="A network wrapper for Roblox remote & bindable events and functions."
                link="https://github.com/Mullets-Gavin/Network"
                title1="About"
                about="A networking module to help discover packet sizes, manager data thats sent/recieved,
                and to help keep consistency throughout a codebase."
                title2="Features"
                stats1="Hook Bindable events & functions"
                stats2="Hook Remote events & functions"
                stats3="Help debug where networking went wrong"
            />

            <br/>

            <Content
                img={Roblox}
                name="Roblox"
                tldr="Roblox Modules. These are all the modules I wrote that I didn't think needed a repository."
                link="https://github.com/Mullets-Gavin/Roblox"
                title1="About"
                about="Modules included within this repository include my Modular Component
                System (MCS). MCS is a component structure for Roblox UI using attributes & ValueBases."
                title2="Features"
                stats1="Helpful code snippits"
                stats2="Modules designed to be used in games"
                stats3="Modular Component System, UI components"
            />
        </div>
    )
}